<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2 class="text-dark">Pokémons Map</h2>
            </div>
            <div class="card-body">
                <div id="map"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import "leaflet/dist/leaflet.css";
    import L from 'leaflet'; 

    export default {
        name:'RoadMap',
        props:{
            url:{
                type: String, 
                required: false,
                default: 'https://i.pinimg.com/originals/cd/b0/74/cdb074a714d997577efacdd257d7b477.pngs',
            },
            description:{
                type: String,
                required: false,
            }
        },
        data(){
            return{
                map:null,
                options: {
                    iconUrl:this.url,
                    iconSize: [38, 95],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76],
                }
            }
        },
        mounted(){

            console.log(this.description)

            this.map = L.map('map').setView([51.505, 0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            var lat = 51 + Math.random() * 2;     
            var lng = -3 + Math.random() * 6; 

            L.marker([lat, lng], {icon: L.icon(this.options)}).addTo(this.map)
                .bindPopup('O pokemon se encontra nesta área.')
                .openPopup();
        },
        watch:{
            url(value){
                var lat = 51 + Math.random() * 2;     
                var lng = -3 + Math.random() * 6; 
                L.marker([lat, lng], {icon: L.icon( {
                    iconUrl:value,
                    iconSize: [38, 95],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76],
            })}).addTo(this.map)
                .bindPopup('testando isso aqui')
                .openPopup();
                return 1
            }
        }
    }
</script>
<style>
    #map{
        height: 70vh;
    }
</style>