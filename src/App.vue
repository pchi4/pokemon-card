<template>
  <div id="app">
    <router-view />
    <MenuComponent />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./components/Footer.vue";
import MenuComponent from "./components/Menu/MenuComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
    MenuComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #363131;
  color: white;
}

h1,
h2,
h3 {
  text-shadow: 2px 0 #0d6efd, -2px 0 #0d6efd, 0 2px #0d6efd, 0 -2px #0d6efd,
    1px 1px #0d6efd, -1px -1px #0d6efd, 1px -1px #0d6efd, -1px 1px #0d6efd;
  color: yellow !important;
  font-family: monospace;
}
</style>
