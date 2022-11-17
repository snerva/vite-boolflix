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
        <div class="container">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cerca" v-model="store.params.query"
                    @keyup.enter="store.searchThisMovie">
                <button class="btn btn-outline-secondary" type="button" @click="store.searchThisMovie">Search</button>
            </div>
        </div>
    </header>
</template>

<style>

</style>