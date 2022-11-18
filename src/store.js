import {
    reactive
} from 'vue'
import axios from 'axios'

export const store = reactive({
    API_URL: 'https://api.themoviedb.org/3/search/multi?api_key=7584e48a1e56af056fa0602ea2dbacd7&language=en-US',
    params: {
        api_key: '7584e48a1e56af056fa0602ea2dbacd7',
        query: '',
    },
    movies: null,
    error: null,
    languages: {
        de: 'https://cdn-icons-png.flaticon.com/512/197/197571.png',
        en: 'https://cdn-icons-png.flaticon.com/512/197/197374.png',
        es: 'https://cdn-icons-png.flaticon.com/512/197/197593.png',
        fr: 'https://cdn-icons-png.flaticon.com/512/197/197560.png',
        it: 'https://cdn-icons-png.flaticon.com/512/197/197626.png',
        ja: 'https://cdn-icons-png.flaticon.com/512/197/197604.png',
        zh: 'https://cdn-icons-png.flaticon.com/512/197/197375.png',
        w: 'https://cdn-icons-png.flaticon.com/512/2115/2115334.png'
    },
    thumb: 'https://image.tmdb.org/t/p/w342',

    searchThisMovie() {
        console.log('Searching...');
        let searchMovie = this.params.query
        console.log(searchMovie);
        const url = `${this.API_URL}&query=${searchMovie}&page=1`
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                this.movies = response.data.results;
                this.params.query = ''
            })
            .catch(err => {
                console.error(err);
                this.error = err.message
            })

    },
    displayFlag(language) {
        const path = this.languages[language];
        if (!path) {
            return store.languages.w
        } else {
            return store.languages[language]
        }

    },
    roundUpVote(n) {
        return Math.ceil(n)
    }
})