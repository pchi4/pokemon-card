<template>
    <div>
        <div class="card" v-if="ability == 'fire'"  v-bind:style="bg.fogo" >
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
        <div class="card" v-if="ability == 'water'"  v-bind:style="bg.water" >
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
        <div class="card" v-if="ability == 'electric'"  v-bind:style="bg.eletrico" >
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
        <div class="card" v-if="ability == 'grass'"  v-bind:style="bg.planta" >
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
        <div class="card" v-if="ability == 'ghost'"  v-bind:style="bg.ghost" >
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
        <div class="card" v-if="ability == 'psychic'"  v-bind:style="bg.psico" >
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
        <div class="card" v-if="ability == 'dark'"  v-bind:style="bg.dark" >
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
        <div class="card" v-if="ability == 'normal'"  v-bind:style="bg.normal" >
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
        <div class="card" v-if="ability == 'bug'"  v-bind:style="bg.inseto" >
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
        <div class="card" v-if="ability == 'fairy'"  v-bind:style="bg.fada" >
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
        <div class="card" v-if="ability == 'rock'"  v-bind:style="bg.rock" >
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
        <div class="card" v-if="ability == 'fighting'"  v-bind:style="bg.lutador" >
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
        <div class="card" v-if="ability == 'ground'"  v-bind:style="bg.terra" >
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
        <div class="card" v-if="ability == 'ice'"  v-bind:style="bg.gelo" >
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
        data(){
            return{
                
            }
        },
        methods:{
            teste(){
                
            }
        },
        computed:{  
        //    teste(){
        //     if(this.ability  == 'fire'){
        //         return this.bg.normal
        //     }
        //    } 

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
    /* justify-content: center!important; */
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

  .input-group{
    width: auto!important;
  }
</style>