<template>
  <div>
    <div
      :class="['card', pokemonsByPage.ability]"
      v-if="pokemonsByPage.ability == pokemonsByPage.ability"
    >
      <div class="main mt-5">
        <img class="w-50" w :src="pokemonsByPage.img" alt="pokemons group" />
      </div>

      <div class="mt-4">
        <div class="header-titulos">
          <h5>{{ pokemonsByPage.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "pokemons",
  data: () => ({}),
  props: ["pokemonsByPage"],
  emits: ["getPokemons"],
};
</script>
<style scoped>
.card {
  max-width: 300px;
  display: flex;
  justify-content: end;
  height: 300px;
  background-color: rgb(226, 226, 61);
  margin: 0 auto !important;
}

.header-titulos {
  padding: 6px;
  background-color: blue;
  margin: 10px;
  color: white;
  font-weight: bolder;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
}

.fire {
  background-color: #f08030;
}

.electric {
  background-color: #f8d030;
}

.water {
  background-color: #6890f0;
}

.ghost {
  background-color: #705898;
}

.grass {
  background-color: #78c850;
}

.psychic {
  background-color: #f85888;
}

.normal {
  background-color: #a8a878;
}

.bug {
  background-color: #a8b820;
}

.fairy {
  background-color: #ee99ac;
}

.fighting {
  background-color: #f08030;
}

.ground {
  background-color: #e0c068;
}

.ice {
  background-color: #98d8d8;
}

.dark {
  background-color: #705848;
}

.rock {
  background-color: #b8a038;
}

.steel {
  background-color: #b8b8d0;
}

.poison {
  background-color: #a040a0;
}

.dragon {
  background-color: #7038f8;
}
</style>
