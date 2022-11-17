<script>
import axios from 'axios'
import { store } from '../store'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    methods: {
        searchThisMovie() {
            console.log('Searching...');
            let searchMovie = this.store.params.query
            console.log(searchMovie);
            const url = `${this.store.API_URL}&query=${searchMovie}&page=1`
            axios.get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.store.movies = response.data.results
                })
                .catch(err => {
                    console.error(err);
                    this.store.error = err.message
                })
        }
    }

}
</script>

<template>
    <header>
        <div class="container">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cerca" v-model="store.params.query"
                    @keyup.enter="searchThisMovie">
                <button class="btn btn-outline-secondary" type="button" @click="searchThisMovie">Search</button>
            </div>
        </div>
    </header>
</template>

<style>

</style>