<script>
import { store } from './../store'
import CountryFlag from '../../node_modules/vue-country-flag-next'
import MoviesCards from "./MoviesCards.vue"
import TvShowsCards from "./TvShowsCards.vue"



export default {
  name: "AppMain",
  components: {
    CountryFlag,
    MoviesCards,
    TvShowsCards,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
   
   <MoviesCards></MoviesCards>
   <TvShowsCards></TvShowsCards>

</template>

<style scoped>
  
</style>