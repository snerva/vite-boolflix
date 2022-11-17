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
    thumb: 'https://image.tmdb.org/t/p/w342/',

    searchThisMovie() {
        console.log('Searching...');
        let searchMovie = this.params.query
        console.log(searchMovie);
        const url = `${this.API_URL}&query=${searchMovie}&page=1`
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                this.movies = response.data.results
            })
            .catch(err => {
                console.error(err);
                this.error = err.message
            })
    },
    displayFlag(language) {
        if (language === 'de') {
            return store.languages.de
        } else if (language === 'en') {
            return store.languages.en
        } else if (language === 'es') {
            return store.languages.es
        } else if (language === 'fr') {
            return store.languages.fr
        } else if (language === 'it') {
            return store.languages.it
        } else if (language === 'ja') {
            return store.languages.ja
        } else if (language === 'zh') {
            return store.languages.zh
        } else {
            return store.languages.w
        }
    }
})