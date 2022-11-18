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
                <div class="profile">

                </div>
            </div>
        </div>
    </header>
</template>

<style>

</style>