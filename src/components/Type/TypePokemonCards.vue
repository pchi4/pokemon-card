<template>
  <div>
    <Nav />

    <div class="container" id="container-type">
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
        <h1 class="fw-bolder">Selected one type pokemons</h1>
      </div>
      <div>
        <img src="/pokemons.png" class="img-fluid" alt="ashe" />
      </div>
      <div class="my-5">
        <select
          class="form-select mt-5"
          @change="postTypePokemon"
          v-model="selectedType"
        >
          <option>Select one type</option>
          <option
            v-for="typeName in typeNames"
            :value="typeName.name"
            :key="typeName.name"
          >
            {{ typeName.name }}
          </option>
        </select>
      </div>
      <div>
        <LoadingComponent
          :class="['loadding', loadding]"
          v-if="loadding == true"
        />
      </div>
      <div v-show="isGetPokemonsTypes">
        <CardType :abilitys="abilitys" :pokemons="pokemons" />
      </div>
    </div>
  </div>
</template>

<script>
import CardType from "./CardType.vue";
import LoadingComponent from "./LoadingComponent.vue";
import Nav from "./../Layout/NavComponent.vue";
import Swal from "sweetalert2";

export default {
  name: "TypePokemonCards",
  components: {
    CardType,
    LoadingComponent,
    Nav,
  },
  data() {
    return {
      typeName: "",
      typeNames: null,
      pokemon: "",
      name: "",
      pokemons: [],
      namePoke: undefined,
      abilitys: null,
      loadding: false,
      isGetPokemonsTypes: false,
      selectedType: null,
    };
  },
  methods: {
    async getListTypePokemon() {
      try {
        const req = await fetch("https://pokeapi.co/api/v2/type/?limit=811");
        const dataList = await req.json();
        this.typeNames = dataList.results;

        if (req.status == 404) {
          Swal.fire({
            title: "Ops!",
            text: `${req.status}`,
            icon: "error",
          });
        }
        return;
      } catch (error) {
        console.log(error);
      }
    },
    async postTypePokemon() {
      try {
        this.loadding = true;

        const res = await fetch(
          `https://pokeapi.co/api/v2/type/${this.selectedType}/`
        );
        const data = await res.json();

        setTimeout(() => {
          this.loadding = false;
          this.isGetPokemonsTypes = true;
        }, 8000);

        this.getPokemons(data.pokemon);
      } catch (error) {
        console.log(error);
      }
    },
    async getPokemons(pokemons) {
      try {
        pokemons.forEach(async (element) => {
          const resPokemon = await fetch(element.pokemon.url);
          const dataPokemon = await resPokemon.json();

          this.pokemons.push(dataPokemon);
          this.abilitys = dataPokemon.types.type[0].name;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getListTypePokemon();
  },
};
</script>

<style>
.loadding {
  display: block;
}

#img {
  width: 180px;
}

@media (min-width: 768px) {
  #container-type {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
