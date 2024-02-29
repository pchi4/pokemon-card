<template>
  <div>
    <Nav @getPokemons="getPokemons" />
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

      <div>
        <div class="alert alert-dark mt-5" role="alert">
          <span
            >If you don't know a name, I recommend you select a few below</span
          >
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

        <!-- grid pokemons -->

        <div>
          <div class="row" id="group-pokemons" v-if="isGetPokemons">
            <div
              class="col-sm-6 col-md-4 p-4"
              v-for="(item, idx) in pokemonsByPage"
              :key="idx"
            >
              <div
                id="toggleMyModal"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="getPokemons(item.name)"
              >
                <CardPokemons
                  @getPokemons="getPokemons"
                  :pokemonsByPage="item"
                />
              </div>
            </div>
          </div>

          <div class="mb-4" v-else>
            <CardComponente
              :name="name"
              :description="description"
              :url="url"
              :hp="hp"
              :ability="ability"
            />
          </div>
        </div>

        <!-- modal -->

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Details Pokemon
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <CardComponente
                      :name="name"
                      :description="description"
                      :url="url"
                      :hp="hp"
                      :ability="ability"
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="my-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam, fuga quas! Libero molestias possimus asperiores
                      fugiat praesentium unde, error dolore minus tempore optio
                      natus rerum ipsam consectetur dicta distinctio? Quisquam?
                    </div>
                    <div class="my-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam, fuga quas! Libero molestias possimus asperiores
                      fugiat praesentium unde, error dolore minus tempore optio
                      natus rerum ipsam consectetur dicta distinctio? Quisquam?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="d-grid gap-2 d-md-flex justify-content-md-center my-4"
          v-if="!pokemon"
        >
          <button
            class="btn btn-primary me-md-2"
            type="button"
            @click.prevent="previousPage"
          >
            Previous
          </button>
          <button
            class="btn btn-primary"
            type="button"
            @click.prevent="nextPage"
          >
            Next
          </button>
        </div>

        <div v-show="isGetPokemons">
          <img class="w-100" src="/pokemons-group.png" alt="pokemons group" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import RoadMap from "./RoadMap.vue";
import CardComponente from "./CardComponente.vue";
import Nav from "./../Layout/NavComponent.vue";
import CardPokemons from "./../Cards/Pokemons";

export default {
  name: "HomeComponent",
  components: {
    // RoadMap,
    CardComponente,
    Nav,
    CardPokemons,
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
      ability: null,
      isGetPokemons: true,
      selected: null,
      pokemonsByPage: [],
      ofsset: 20,
      limit: 20,
    };
  },
  methods: {
    showModal() {
      var modalToggle = document.getElementById("toggleMyModal");
      modalToggle.show();
    },
    async getPokemons(name) {
      var namePokemon = this.pokemon.toLowerCase();

      const pegarOsNomes = (nameSelected, nameInput) => {
        if (nameInput) {
          this.isGetPokemons = false;
          return namePokemon;
        }
        if (nameSelected) {
          this.isGetPokemons = true;
          return name.toLowerCase();
        }
      };

      var retornaOsNomes = pegarOsNomes(name, namePokemon);

      const req = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${retornaOsNomes}/`
      );
      const pokemon = await req.json();

      let sprites, types;
      ({ sprites, types } = pokemon);

      var typeAbility = types[0].type.name;
      this.ability = typeAbility;

      this.pokemonsByPage = [...this.pokemonsByPage, typeAbility];

      this.name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
      this.url = sprites.other.dream_world.front_default;
      this.isGetPokemons = false;

      this.getBySpecies(retornaOsNomes);
    },
    async getBySpecies(retornaOsNomes) {
      const req = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${retornaOsNomes}/`
      );
      const data = await req.json();

      let flavor_text_entries, id;
      ({ flavor_text_entries, id } = data);

      this.description = flavor_text_entries[0].flavor_text;
      this.getNatureByName(id);
    },
    async getNatureByName(id) {
      const req = await fetch(`https://pokeapi.co/api/v2/nature/${id}/`);
      const data = await req.json();

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
    async getAllPokemosByPages() {
      try {
        const req = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=20&limit=21"
        );
        const pokemons = await req.json();

        pokemons.results.forEach(async (element) => {
          const req = await fetch(element.url);
          const pokemon = await req.json();
          this.pokemonsByPage.push({
            name: element.name[0].toUpperCase() + element.name.substring(1),
            img: pokemon.sprites.other.dream_world.front_default,
            ability: pokemon.types[0].type.name,
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async nextPage() {
      this.ofsset += 20;
      try {
        this.pokemonsByPage = [];
        const reqNextPage = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${this.ofsset}&limit=21`
        );
        const newPage = await reqNextPage.json();
        newPage.results.forEach(async (element) => {
          const req = await fetch(element.url);
          const pokemon = await req.json();
          this.pokemonsByPage.push({
            name: element.name[0].toUpperCase() + element.name.substring(1),
            img: pokemon.sprites.other.dream_world.front_default,
            ability: pokemon.types[0].type.name,
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async previousPage() {
      this.ofsset -= 20;
      try {
        this.pokemonsByPage = [];
        const reqPreviousPage = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${this.ofsset}&limit=21`
        );
        const oldPage = await reqPreviousPage.json();
        oldPage.results.forEach(async (element) => {
          const req = await fetch(element.url);
          const pokemon = await req.json();
          this.pokemonsByPage.push({
            name: element.name[0].toUpperCase() + element.name.substring(1),
            img: pokemon.sprites.other.dream_world.front_default,
            ability: pokemon.types[0].type.name,
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getListPokemon();
    this.getAllPokemosByPages();
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
