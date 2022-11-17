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
        <div class="container d-flex justify-content-between align-items-center py-3">
            <div class="logo">
                <h2>BOOLFLIX</h2>
            </div>
            <div class="search input-group input-group-sm m-3 w-25">
                <button class="btn border boredr-white border-end-0" type="button" @click="store.searchThisMovie">Search
                </button>
                <input type="text" class="form-control border border-white border-start-0" placeholder="Cerca"
                    v-model="store.params.query" @keyup.enter="store.searchThisMovie">

            </div>
        </div>
    </header>
</template>

<style>

</style>