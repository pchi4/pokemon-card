<template>
  <nav class="bg-dark">
    <div class="row">
      <div class="col-8">
        <div class="d-flex justify-content-start">
          <button
            class="btn btn-primary m-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
          <div class="mx-10 mt-2">
            <img
              src="/pokemon-titulo.png"
              width="200"
              alt="pokemon titusdasdlo"
            />
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="d-flex justify-content-end">
          <div class="input-group mb-3 mt-5 mx-4">
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
              @click.prevent="executeEmit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      pokemon: null,
    };
  },
  name: "NavComponent",
  emits: ["getPokemons"],
  methods: {
    executeEmit() {
      this.$emit("getPokemons", this.pokemon);
    },
  },
};
</script>
