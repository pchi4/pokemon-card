<template>
  <div>
    <div
      :class="['card', pokemonsByPage.ability]"
      v-if="pokemonsByPage.ability == pokemonsByPage.ability"
    >
      <div class="main mt-5">
        <img class="w-50" w :src="pokemonsByPage.img" alt="pokemons group" />
      </div>

      <div class="header-titulos">
        <h5>{{ pokemonsByPage.name }}</h5>
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
<style>
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
