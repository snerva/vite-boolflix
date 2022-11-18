import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

library.add(faMagnifyingGlass, faBell)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
