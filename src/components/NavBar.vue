<template>
  <nav class="bg-dark">
    <div class="row">
      <div class="col-12 p-2">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <button
              class="btn btn-primary m-4"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
            <div
              class="mx-10 mt-2 d-none d-md-block d-lg-block"
              @click="retloadPage"
            >
              <img
                src="/pokemon-titulo.png"
                width="200"
                alt="pokemon titusdasdlo"
              />
            </div>
          </div>
          <div class="d-flex h-25 m-4">
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
    retloadPage() {
      window.location.reload();
    },
  },
};
</script>
