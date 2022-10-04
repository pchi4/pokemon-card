<template>
  <div id="app">
    <NavComponent/>
      <router-view></router-view>
    <FooterComponent/>
    <MenuComponent/>
  </div>
</template>

<script>
import NavComponent from './components/Layout/NavComponent.vue';
import FooterComponent from './components/Layout/FooterComponent.vue';
import MenuComponent from './components/Menu/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    NavComponent,
    FooterComponent,
    MenuComponent
}
}
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
</style>
