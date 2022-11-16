import {
    reactive
} from 'vue'


export const store = reactive({
    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=7584e48a1e56af056fa0602ea2dbacd7&language=en-US',
    params: {
        api_key: '7584e48a1e56af056fa0602ea2dbacd7',
        query: '',
    },
    movies: null,
    error: null,

})