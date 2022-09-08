<template>
    <div>
        <div class="card" v-if="mudarCor()"  v-bind:style="mudarCor()" >
            <div class="header">
                <div class="header-titulos">
                    <h5 >{{name}}</h5>
                    <span id="hp">HP: {{hp}}</span>
                </div>
            </div>
            <div class="main">
                <img style="width:70%;" :src="url" alt="" srcset="">
            </div>
            <div class="footer">
                <div id="desc">Description</div>
                <p id="info">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CardComponent',
        props:{
            card: { 
                type: null,
                require: true,
            },
            bg:{
                type: null,
                require: true,
            },
            ability:{ 
                type: null,
                require: true, 
            },
            name:{
                type: null,
                require: true,
            },
            hp:{
                type: null,
                require: true,
            },
            description: {
                type: null,
                require: true,
            },
            url:{
                type: null,
                require: true,
            }
        },
        methods:{
            mudarCor(){

                this.habilidade = this.ability
                this.backColor = this.bg

                if(this.habilidade == 'fire') return this.backColor.fogo;
                if(this.habilidade == 'eletrico') return this.backColor.eletrico;
                if(this.habilidade == 'water') return this.backColor.water;
                if(this.habilidade == 'ghost') return this.backColor.ghost;
                if(this.habilidade == 'grass') return this.backColor.planta;
                if(this.habilidade == 'psychic') return this.backColor.psico;
                if(this.habilidade == 'normal') return this.backColor.normal;
                if(this.habilidade == 'bug') return this.backColor.inseto;
                if(this.habilidade == 'fairy') return this.backColor.fada;
                if(this.habilidade == 'fighting') return this.backColor.lutador;
                if(this.habilidade == 'ground') return this.backColor.terra;
                if(this.habilidade == 'ice') return this.backColor.gelo;
                if(this.habilidade == 'rock') return this.backColor.rock;
                if(this.habilidade == 'steel') return this.backColor.steel;
                if(this.habilidade == 'poison') return this.backColor.poison;

            }
        }
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
</style>