<template>
  <div>
    <div>
      <NavComponent></NavComponent>
    </div>
    <div class="container">
      <div class="titulo row">
        <div class="col-12">
          <img  id="img" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png" alt=""> 
        </div>
      </div>
      <div v-show="!isGetPokemons">
        <CardComponente :name="name" :description="description" :url="url" :hp="hp" :bg="bg" :ability="ability" />
      </div>
      <div class="input-group mb-3 mt-5">
        <input type="text" class="form-control" v-model="pokemon" placeholder="Enter a pokemon name" aria-label="Enter a pokemon name" aria-describedby="button-addon2">
        <button class="btn btn-secondary" type="button" @click.prevent="getPokemons()" id="button-addon2">Search</button>
      </div>
      <div>
        <div class="alert alert-primary mt-5" role="alert">
          <span>If you don't know a name, I recommend you select a few below</span>
        </div>
        <select class="form-select mt-5" v-model="selected" @change="postPokemons()" aria-label="Default select example">
          <option selected>Select one pokémon</option>
          <option v-for="pokemon in pokemons" :value="pokemon.id" :key="pokemon.id" >{{pokemon.id}}</option>
        </select>
      </div>
      <div class="container mb-5">
        <TypePokemonCards/>
      </div>
      <div class="container">
        <RoadMap :url="url"></RoadMap>
      </div>
    </div>
    <div>
      <FooterComponent/>
    </div>
  </div>
</template>

<script>
import Pokedex from 'pokedex-promise-v2';
import Swal from 'sweetalert2'
import RoadMap from './RoadMap.vue';
import NavComponent from './NavComponent';
import CardComponente from './CardComponente';
import FooterComponent from './FooterComponent';
import TypePokemonCards from  './TypePokemonCards';

const options ={
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath:'/api/v2/',
    cacheLimit: 100 * 1000,
    timeout: 5 * 1000
};

export default {
  name: 'HelloWorld',
  components:{
    RoadMap,
    NavComponent,
    CardComponente,
    FooterComponent,
    TypePokemonCards,
},
props: {
  msg: String
},
data(){
  return{
    pokemon:"",
    pokemons: null,
    url: undefined,
    name: '',
    description: undefined,
    hp: '',
    ability: 'undefined',
    isGetPokemons: true,
  }
  },
  methods:{
    getPokemons(name){
      
      const P = new Pokedex(options); 
      var namePokemon = this.pokemon.toLowerCase(); 

      function pegarOsNomes(nameSelected, nameInput){
        if (nameSelected) return name
        if (nameInput) return namePokemon
        
      }

      var retornaOsNomes = pegarOsNomes(name, namePokemon);
  
      P.getPokemonByName(retornaOsNomes, (res, erro)=>{
          if(!erro){
            const pokemon = res;
            let sprites, types;

            ({sprites, types} = pokemon);
            
            var typeAbility = types[0].type.name
            this.ability = typeAbility
          
            this.name = res.name[0].toUpperCase() + res.name.substring(1);
            this.url = sprites.other.dream_world.front_default
            this.isGetPokemons = false
          }else{
            Swal.fire({
              title:'Pokemon não encontrado!',
              text:`${retornaOsNomes} não econtrado`,
              icon:'error'
            });
          }
      });

      P.getPokemonSpeciesByName(retornaOsNomes, (res, erro)=>{
        if(!erro){
          const description = res;
          let flavor_text_entries, id;
          ({flavor_text_entries, id}=description);

          this.description = flavor_text_entries[0].flavor_text;

          P.getNatureByName(id, (res, erro)=>{
            if(!erro){
              const hp = res
              let move_battle_style_preferences
              ({move_battle_style_preferences}=hp)

              this.hp = move_battle_style_preferences[0].high_hp_preference;
            }
          })
        }
      });
    },
    async getListPokemon(){
      const req = await fetch("http://localhost:3000/pokemons/");
      const data  = await req.json();
      this.pokemons = data;  
    },

    postPokemons(){
      var name = this.selected
      const P = new Pokedex(options); 

      P.getPokemonByName(name, (res, erro)=>{
          if(!erro){
            const pokemon = res;
            console.log(pokemon);
          }
      });
      this.getPokemons(name)
    },
  },
  mounted(){ 
    this.getListPokemon();
  }
}
</script>

<style scoped>
  .card{
    max-width: 300px;
    background-color: rgb(226, 226, 61);
    margin: 0 auto!important;
  }

  #titulo{
    font-weight: bolder;
  }

  #img{
    width: 180px;
  }

  .footer{
    background-color: rgba(255, 228, 196, 0.589);
    margin: 10px;
    border-radius: 0px 0px 10px 10px;
  }

  .header-titulos{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color:blue;
    margin: 10px;
    color: white;
    font-weight: bolder;
    border-radius: 10px 10px 0px 0px;
  }

  #hp{
    background-color: #323232;
    color: white;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 0px 10px;
    text-align: center;
    padding-top: 5px;
  }

  #desc{
    background-color: #323232;
    width: 100%;
    padding: 10px;
    color: white;
    font-style: bolder;
    font-size: 18px;
    text-align: start;
  }

  #info{
    text-align: justify;
    padding: 10px;
  }

  .main{
    height: 200px;
  }

  .titulo{
    padding: 10px 0px;
    color: white;
    font-weight: bolder;
  }

  .input-group{
    width: auto!important;
  }
</style>
