<template>
      <div>
        <div>
          <select class="form-select mt-5" v-model="selectedType" @change="postTypePokemon()" aria-label="Default select example">
            <option selected>Select one pokémon</option>
            <option v-for="typeName in typeNames" :value="typeName.id" :key="typeName.id">{{typeName.id}}</option>
          </select>
        </div>
        <div>
          <LoadingComponent :class="['loadding', loadding]"  v-if="loadding == true"  />
        </div>
        <div v-show="isGetPokemonsTypes">
          <CardType :abilitys="abilitys" :pokemons="pokemons" />
        </div>
    </div> 
</template>

<script>
import Pokedex from 'pokedex-promise-v2';
import CardType from './CardType';
import LoadingComponent from './LoadingComponent';

const options ={
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath:'/api/v2/',
    cacheLimit: 100 * 1000,
    timeout: 5 * 1000
};

export default {
    name: 'TypePokemonCards',
    components:{
      CardType,
      LoadingComponent
    },
    data(){
      return {
        typeName: '',
        typeNames: null,
        selectedType: '',
        pokemon: '',
        name: '',
        pokemons: undefined,
        namePoke: undefined,
        abilitys: undefined,
        loadding: false,
        isGetPokemonsTypes: false,
        url: undefined,
      }
    },
    methods:{
      async getListTypePokemon(){
        const req = await fetch("http://localhost:3000/type/");
        const dataList = await req.json();
        this.typeNames = dataList;
      },  
      postTypePokemon(){
        var typePokemon = this.selectedType
        const P = new Pokedex(options);

        this.loadding = true

        P.getTypeByName(typePokemon, (res, erro)=>{
          if(!erro){
            const type = res
            let pokemon;
            
            ({ pokemon } = type )

            setTimeout(()=>{
              this.loadding = false
              this.isGetPokemonsTypes = true
            },1000)

            var namePokemon = [];

            for(let e of pokemon ){
              namePokemon.push(e.pokemon.name)
            }

            this.namePoke = namePokemon;

            P.getPokemonByName(namePokemon, (res, erro)=>{
              if(!erro){
                const pokemon = res;
                this.pokemons = pokemon
                this.abilitys = pokemon.types.type[0].name
                this.url = pokemon.sprites.other.dream_world.front_default
              }
            })
          }
        })
      }
    },
    mounted(){
      this.getListTypePokemon();
    }
}

</script>

<style>
  .loadding{
    display: block;
  }
</style>