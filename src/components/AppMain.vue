<script>
import axios from 'axios'
import { store } from '../store'
export default {
    name: 'AppMain',
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
            const url = `${this.store.API_URL}&query=${searchMovie}`
            axios.get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.store.movies = response.data.results
                })
                .catch(err => {
                    console.error(err);
                    this.store.error = err.message
                })
        },
        callApi(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data.results);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        this.callApi(this.store.API_URL)
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cerca" v-model="store.params.query">
                <button class="btn btn-outline-secondary" type="button" @click="searchThisMovie">Search</button>
            </div>

            <div class="movies">
                <div class="row row-cols-5 p-3 g-3 text-center">
                    <div class="col" v-for="movie in store.movies">
                        <ul class="bg-light ">
                            <li>{{ movie.title }}</li>
                            <li>{{ movie.original_title }}</li>
                            <li>{{ movie.original_language }}</li>
                            <li>{{ movie.vote_average }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>

</style>