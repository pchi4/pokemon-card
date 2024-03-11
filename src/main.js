import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import VueRouter from "vue-router";
import HomeComponent from "./screens/Search/index.vue";
import TypePokemonCards from "./screens/Type/index.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faDragon,
  faHouse,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faHouse, faDragon, faMusic);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeComponent,
    },
    {
      path: "/types",
      component: TypePokemonCards,
    },
  ],
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
