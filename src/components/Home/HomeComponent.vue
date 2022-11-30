<template>
  <div>
    <div class="container" id="container-home">
      <div class="titulo row">
        <div class="col-12">
          <img
            id="img"
            src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png"
            alt=""
          />
        </div>
      </div>
      <div class="p-2">
        <h1 class="fw-bolder">Check your pokemon here!</h1>
      </div>
      <div v-show="!isGetPokemons">
        <CardComponente
          :name="name"
          :description="description"
          :url="url"
          :hp="hp"
          :ability="ability"
        />
      </div>
      <div class="input-group mb-3 mt-5">
        <input
          type="text"
          class="form-control"
          v-model="pokemon"
          placeholder="Enter a pokemon name"
          aria-label="Enter a pokemon name"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-secondary"
          type="button"
          @click.prevent="getPokemons()"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      <div>
        <div class="alert alert-dark mt-5" role="alert">
          <span
            >If you don't know a name, I recommend you select a few below</span
          >
        </div>
        <div v-show="isGetPokemons">
          <img class="w-100" src="/pokemons-group.png" alt="pokemons group" />
        </div>
        <select
          class="form-select my-5"
          v-model="selected"
          required
          @change="postPokemons()"
          aria-label="Default select example"
        >
          <option selected>Select one pokémon</option>
          <option
            v-for="pokemon in pokemons"
            :value="pokemon.name"
            :key="pokemon.name"
          >
            {{ pokemon.name }}
          </option>
        </select>
      </div>
      <div class="py-3" v-show="!isGetPokemons">
        <RoadMap :url="url" :description="description"></RoadMap>
      </div>
    </div>
  </div>
</template>

<script>
import RoadMap from "./RoadMap.vue";
import CardComponente from "./CardComponente.vue";

export default {
  name: "HomeComponent",
  components: {
    RoadMap,
    CardComponente,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      pokemon: "",
      pokemons: null,
      url: undefined,
      name: "",
      description: undefined,
      hp: undefined,
      ability: "undefined",
      isGetPokemons: true,
      selected: null,
    };
  },
  methods: {
    async getPokemons(name) {
      var namePokemon = this.pokemon.toLowerCase();

      function pegarOsNomes(nameSelected, nameInput) {
        if (nameSelected) return name;
        if (nameInput) return namePokemon;
      }

      var retornaOsNomes = pegarOsNomes(name, namePokemon);

      try {
        const req = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${retornaOsNomes}/`
        );
        const data = req.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      /*         let sprites, types;
        ({ sprites, types } = pokemon); */

      /*       var typeAbility = types[0].type.name;
      this.ability = typeAbility;

      this.name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
      this.url = sprites.other.dream_world.front_default;
      this.isGetPokemons = false; */

      this.getBySpecies(retornaOsNomes);
    },
    async getBySpecies(retornaOsNomes) {
      const req = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${retornaOsNomes}/`
      );
      const data = req.json();

      let flavor_text_entries, id;
      ({ flavor_text_entries, id } = data);

      this.description = flavor_text_entries[0].flavor_text;
      this.getNatureByName(id);
    },
    async getNatureByName(id) {
      const req = await fetch(`https://pokeapi.co/api/v2/nature/${id}/`);
      const data = req.json();

      let move_battle_style_preferences;
      ({ move_battle_style_preferences } = data);

      this.hp = move_battle_style_preferences[0].high_hp_preference;
    },
    async getListPokemon() {
      const req = await fetch("http://pokeapi.co/api/v2/pokemon/?limit=811");
      const data = await req.json();
      this.pokemons = data.results;
    },
    postPokemons() {
      var name = this.selected;
      this.getPokemons(name);
    },
  },
  mounted() {
    this.getListPokemon();
  },
};
</script>

<style scoped>
.card {
  max-width: 300px;
  background-color: rgb(226, 226, 61);
  margin: 0 auto !important;
}

#titulo {
  font-weight: bolder;
}

#img {
  width: 180px;
}

.footer {
  background-color: rgba(255, 228, 196, 0.589);
  margin: 10px;
  border-radius: 0px 0px 10px 10px;
}

.header-titulos {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: blue;
  margin: 10px;
  color: white;
  font-weight: bolder;
  border-radius: 10px 10px 0px 0px;
}

#hp {
  background-color: #323232;
  color: white;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0px 10px;
  text-align: center;
  padding-top: 5px;
}

#desc {
  background-color: #323232;
  width: 100%;
  padding: 10px;
  color: white;
  font-style: bolder;
  font-size: 18px;
  text-align: start;
}

#info {
  text-align: justify;
  padding: 10px;
}

.main {
  height: 200px;
}

.titulo {
  padding: 10px 0px;
  color: white;
  font-weight: bolder;
}

.input-group {
  width: auto !important;
}

@media (min-width: 768px) {
  #container-home {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
