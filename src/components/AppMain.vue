<script>
import { store } from '../store'
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="movies">
                <div class="row row-cols-5 p-3 g-3 text-center">
                    <div class="col" v-for="movie in store.movies">
                        <ul class="bg-light">
                            <li>{{ movie.title }} {{ movie.name }}</li>
                            <li>{{ movie.original_title }} {{ movie.original_name }}</li>
                            <li>
                                <img class="img-fluid flag_icon" :src="store.displayFlag(movie.original_language)"
                                    alt="">
                            </li>
                            <li>{{ movie.vote_average }}</li>
                        </ul>
                        <div class="cover">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<style>

</style>