<script>
import { store } from '../store'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <header>
        <div class="header_navbar d-flex justify-content-between align-items-center px-4 py-3">
            <div class="navbar_left d-flex align-items-center">
                <div class="logo px-4">
                    <h2>BOOLFLIX</h2>
                </div>
                <div class="menu">
                    <a href="">Home</a>
                    <a href="">Serie TV</a>
                    <a href="">Film</a>
                    <a href=""> Nuovi e popolari</a>
                    <a href="">La mia lista</a>
                    <a href="">Sfoglia per lingua</a>

                </div>

            </div>
            <div class="navbar_right d-flex align-items-center">
                <div class="search input-group input-group-sm m-3 px-2">
                    <button class="search_btn btn border border-white border-end-0" type="button"
                        @click="store.searchThisMovie">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </button>
                    <input type="text" class="form-control border border-white border-start-0" placeholder="Cerca"
                        v-model="store.params.query" @keyup.enter="store.searchThisMovie">

                </div>
                <div class="notifying">
                    <font-awesome-icon icon="fa-regular fa-bell" />
                </div>
                <div class="kids">
                    <a href="">Bambini</a>
                </div>
                <div class="profile">
                    <div class="icon_user mx-3 dropbtn">
                        <img class="img-fluid rounded-4" src="../../img/icon_spyro.png" alt="">
                    </div>
                    <div class="drop_content mt-2 py-3 px-2">
                        <section class="d-flex align-items-center p-2">
                            <img class="img-fluid rounded-4" src="../../img/icon_boss.png" alt="">
                            <a href="#">Baby Boss</a>
                        </section>
                        <section class="d-flex align-items-center p-2">
                            <img class="img-fluid rounded-4" src="../../img/icon_winona.png" alt="">
                            <a href="#">Winona</a>
                        </section>
                        <section class="d-flex align-items-center p-2">
                            <img class="img-fluid rounded-4" src="../../img/icon_kids.png" alt="">
                            <a href="#">Bambini</a>
                        </section>
                        <section class="d-flex align-items-center p-2">
                            <font-awesome-icon icon="fa-solid fa-pencil" size="2xl" transform="right-5" />
                            <a class="settings" href="#">Gestisci i profili</a>
                        </section>
                        <section class="d-flex align-items-center p-2">
                            <font-awesome-icon icon="fa-regular fa-share-from-square" size="2xl" transform="right-5" />
                            <a class="settings" href="#">Trasferisci profilo</a>
                        </section>
                        <section class="d-flex align-items-center p-2">
                            <font-awesome-icon icon="fa-regular fa-user" size="2xl" transform="right-5" />
                            <a class="settings" href="#">Account</a>
                        </section>
                        <section class="d-flex align-items-center p-2">
                            <font-awesome-icon icon="fa-regular fa-circle-question" size="2xl" transform="right-5" />
                            <a class="settings" href="#">Centro assistenza</a>
                        </section>
                        <hr class="grey_line">
                        <a class="sign_out" href="#">Esci da Netflix</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style>

</style>