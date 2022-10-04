<template>
    <div class="row" id="teste">
        <div class="col-sm-6 p-4" v-for="item in pokemons" :key="item.id">
            <div :class="['card', item.types[0].type.name]" v-if="abilitys == ability" >
                <div class="header">
                    <div class="header-titulos">
                        <h5 >{{item.name}}</h5>
                        <span id="hp">HP: {{item.base_experience}}</span>
                    </div>
                </div>
                <div class="main">
                    <img style="width:70%;" :src="item.sprites.other.dream_world.front_default" alt="" srcset="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "CardType",
    props: {
        pokemons: {
            type: Array,
            require: false,
        },
        abilitys:{ 
            type: String,
            require: true, 
        },
    },
}
</script>

<style scoped>
    .card{
    max-width: 300px;
    background-color: rgb(226, 226, 61);
    margin: 0 auto!important;
  }

  #titulo{
    font-weight: bolder;
  }

  #img{
    width: 180px;
  }

  .footer{
    background-color: rgba(255, 228, 196, 0.589);
    margin: 10px;
    border-radius: 0px 0px 10px 10px;
  }

  .header-titulos{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color:blue;
    margin: 10px;
    color: white;
    font-weight: bolder;
    border-radius: 10px 10px 0px 0px;
  }

  #hp{
    background-color: #323232;
    color: white;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 0px 10px;
    text-align: center;
    padding-top: 5px;
  }

  #desc{
    background-color: #323232;
    width: 100%;
    padding: 10px;
    color: white;
    font-style: bolder;
    font-size: 18px;
    text-align: start;
  }

  #info{
    text-align: justify;
    padding: 10px;
  }

  .main{
    height: 200px;
  }

  .titulo{
    padding: 10px 0px;
    color: white;
    font-weight: bolder;
  }
.fire{
    background-color: #F08030;
}

.electric{
    background-color: #F8D030;
}

.water {
    background-color: #6890F0;
}

.ghost {
    background-color: #705898;
}

.grass {
    background-color: #78C850;
}

.psychic {
    background-color: #F85888;
}

.normal {
    background-color: #A8A878;
}

.bug {
    background-color: #A8B820;
}

.fairy {
    background-color: #EE99AC;
}

.fighting {
    background-color: #F08030;
}

.ground {
    background-color: #E0C068;
}

.ice {
    background-color: #98D8D8;
}

.dark {
    background-color: #705848;
}

.rock {
    background-color: #B8A038;
}

.steel {
    background-color: #B8B8D0;
}

.poison {
    background-color: #A040A0;
}

.dragon{
    background-color: #7038F8;
}

#teste{
    overflow-y: scroll;
    overflow-x: hidden;
    height: 650px;
}
</style>