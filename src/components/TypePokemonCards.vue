<template>
      <div>
        <div class="mb-3">
          <select class="form-select mt-5" v-model="selectedType" @change="postTypePokemon()">
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
            },8000)

            var namePokemons = [];

            for(let e of pokemon ){
              namePokemons.push(e.pokemon.name)
            }

            this.namePoke = namePokemons;

            P.getPokemonByName(namePokemons, (res, erro)=>{
              if(!erro){
                const pokemon = res;
                this.pokemons = pokemon
                this.abilitys = pokemon.types.type[0].name
                
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