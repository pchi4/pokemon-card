<template>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><font-awesome-icon icon="fa-solid fa-bars" /></button>
            <div class="d-flex">
                <a class="navbar align-middle p-2" href="#">
                    <span class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <font-awesome-icon icon="fa-solid fa-music" size="2x"/>
                        </a>
                        <ul class="dropdown-menu">
                            <audio controls src="../../media/onlymp3.to - Pokémon - Abertura - 1ª temporada--PlAg8R9TG4-192k-1655090297136.mp3" preload="auto" autoplay></audio>
                        </ul>
                    </span>
                </a>
                <a class="navbar-brand" href="#">
                    <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png" alt="" width="50" height="50" class="d-inline-block align-text-top">
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
    export default{
        name:"NavComponent"
    }
</script>