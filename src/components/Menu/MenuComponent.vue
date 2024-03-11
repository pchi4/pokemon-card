<template>
  <div>
    <div
      class="offcanvas offcanvas-start bg-dark"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel fw-bolder">
          Select one of the options below
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <nav>
          <span
            ><router-link class="btn btn-primary w-100 fw-bolder m-2" to="/"
              ><font-awesome-icon icon="fa-solid fa-house" /> Search pokemons
            </router-link></span
          >
          <span
            ><router-link
              class="btn btn-primary w-100 fw-bolder m-2"
              to="/types"
              ><font-awesome-icon icon="fa-solid fa-dragon" /> Types
              pokemons</router-link
            ></span
          >
        </nav>
        <div>
          <img
            class="w-75 pt-4"
            src="/pokemon-titulo.png"
            alt="pokemon titulo"
          />
        </div>
        <div>
          <img class="w-100 pt-3" src="/ashe.png" alt="ww" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>
