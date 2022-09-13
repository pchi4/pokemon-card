<template>
      <div>
        <div>
          <select class="form-select mt-5" v-model="selectedType" @change="postTypePokemon()" aria-label="Default select example">
            <option selected>Select one pokémon</option>
            <option v-for="typeName in typeNames" :value="typeName.id" :key="typeName.id">{{typeName.id}}</option>
          </select>
        </div>
        <div>
          <CardType :abilitys="abilitys" :pokemons="pokemons" />
        </div>
    </div> 
</template>

<script>
import Pokedex from 'pokedex-promise-v2';
import CardType from './CardType';

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

        P.getTypeByName(typePokemon, (res, erro)=>{
          if(!erro){
            const type = res
            let pokemon;

            ({ pokemon } = type )

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