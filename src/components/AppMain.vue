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
                <div class="row row-cols-6 p-3 g-3 text-center">
                    <div class="col movie_card" v-for="movie in store.movies">

                        <div class="card_info  p-3">
                            <div class="title">
                                <h5>{{ movie.title }} {{ movie.name }}</h5>
                            </div>
                            <div class="contents">
                                <p><small>{{ movie.original_title }} {{ movie.original_name }}</small></p>
                                <p class="overview"><small>{{ movie.overview }}</small></p>
                            </div>
                            <div class="info">
                                <img class="img-fluid flag_icon" :src="store.displayFlag(movie.original_language)"
                                    alt="">
                                <div class="vote p-1">
                                    {{ store.roundUpVote(movie.vote_average) }}
                                </div>
                            </div>
                        </div>

                        <div class="cover rounded-1 ">
                            <img class="img-fluid" :src="`${store.thumb}/${movie.poster_path}`" alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<style>

</style>