<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
import { store } from './store'
export default {
  name: 'App',
  components: {
    AppMain,
    AppHeader
  },
  data() {
    return {
      store
    }
  },

}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <footer></footer>
</template>

<style lang="scss" scoped>

</style>
