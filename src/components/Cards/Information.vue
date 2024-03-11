<template>
  <div>
    <div :class="['card', ability]" v-if="ability == ability">
      <div class="header">
        <div class="header-titulos">
          <h5>{{ name }}</h5>
          <span id="hp">HP: {{ hp }}</span>
        </div>
      </div>
      <div class="main">
        <img style="width: 70%" :src="url" alt="" srcset="" />
      </div>
      <div class="footer">
        <div id="desc">Description</div>
        <p id="info">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponente",
  props: {
    card: {
      type: null,
      require: true,
    },
    ability: {
      type: null,
      require: true,
    },
    name: {
      type: null,
      require: true,
    },
    hp: {
      type: null,
      require: true,
    },
    description: {
      type: null,
      require: true,
    },
    url: {
      type: null,
      require: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
.card {
  max-width: 300px;
  background-color: rgb(226, 226, 61);
  margin: 0 auto !important;
}

#titulo {
  font-weight: bolder;
}

#img {
  width: 180px;
}

.footer {
  background-color: rgba(255, 228, 196, 0.589);
  margin: 10px;
  border-radius: 0px 0px 10px 10px;
}

.header-titulos {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: blue;
  margin: 10px;
  color: white;
  font-weight: bolder;
  border-radius: 10px 10px 0px 0px;
}

#hp {
  background-color: #323232;
  color: white;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0px 10px;
  text-align: center;
  padding-top: 5px;
}

#desc {
  background-color: #323232;
  width: 100%;
  padding: 10px;
  color: white;
  font-style: bolder;
  font-size: 18px;
  text-align: start;
}

#info {
  text-align: justify;
  padding: 10px;
}

.main {
  height: 200px;
}

.titulo {
  padding: 10px 0px;
  color: white;
  font-weight: bolder;
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
