<template>
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
        @change="postTypePokemon()"
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
</template>

<script>
import CardType from "./CardType.vue";
import LoadingComponent from "./LoadingComponent.vue";

export default {
  name: "TypePokemonCards",
  components: {
    CardType,
    LoadingComponent,
  },
  data() {
    return {
      typeName: "",
      typeNames: null,
      pokemon: "",
      name: "",
      pokemons: undefined,
      namePoke: undefined,
      abilitys: undefined,
      loadding: false,
      isGetPokemonsTypes: false,
    };
  },
  methods: {
    async getListTypePokemon() {
      const req = await fetch("https://pokeapi.co/api/v2/type/?limit=811");
      const dataList = await req.json();
      this.typeNames = dataList.results;
    },
    async postTypePokemon() {
      var typePokemon = this.selectedType;

      this.loadding = true;

      const res = await fetch(`https://pokeapi.co/api/v2/type/${typePokemon}/`);
      const data = await res.json();
      const type = data;

      console.log(type);

      let pokemon;
      ({ pokemon } = type);

      setTimeout(() => {
        this.loadding = false;
        this.isGetPokemonsTypes = true;
      }, 8000);

      var namePokemons = [];

      for (let e of pokemon) {
        namePokemons.push(e.pokemon.name);
      }

      this.getPokemons(namePokemons);
    },
    async getPokemons(namePokemons) {
      const resPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${namePokemons}/`
      );
      const dataPokemon = resPokemon.json();

      this.pokemons = dataPokemon;
      this.abilitys = dataPokemon.types.type[0].name;
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