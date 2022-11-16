<script>
import AppMain from './components/AppMain.vue'
import { store } from './store'
export default {
  name: 'App',
  components: {
    AppMain
  },
  data() {
    return {
      store
    }
  },

}
</script>

<template>
  <header></header>
  <AppMain></AppMain>
  <footer></footer>
</template>

<style lang="scss" scoped>

</style>
