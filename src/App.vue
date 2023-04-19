<script>
import { store } from './store'
import CountryFlag from '../node_modules/vue-country-flag-next'
export default{
  components:{
    CountryFlag
  },
  data(){
    return{
      store
    }
  },
}
</script>

<template>

  <div class="serchbox">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="What are you watching today?" v-model='store.searchText'  @keyup.enter="store.fetchMovies(), store.fetchTvShows()">
      <button class="btn btn-outline-secondary" type="button" @click="store.fetchMovies(), store.fetchTvShows()">Search</button>
    </div>
  </div>

  <div class="movies_list">
    <h4 class="bg-warning text-center" v-if="store.foundedMovies !=0">MOVIES</h4>
    <ul>
    <li v-for="movie in store.foundedMovies"> 
      <p>Title: {{ movie.title }}</p>
      <p>Original title: {{ movie.original_title }}</p>
      <div class="d-flex">
        <p class="me-2">Language:</p>
        <span>
          <CountryFlag :country="movie.original_language" size="small"/>
        </span>
      </div>
      <p>Score: {{ movie.vote_average }}</p>
    </li>
  </ul>
  </div>

  <div class="tvshows_list">
    <h4 class="bg-warning text-center" v-if="store.foundedTvShows !=0">TV SHOWS</h4>
    <ul>
    <li v-for="tvshow in store.foundedTvShows">
      
      <p>Title: {{ tvshow.name }}</p>
      <p>Original title: {{ tvshow.original_name }}</p>
      <div class="d-flex">
        <p class="me-2">Language:</p>
        <span>
          <CountryFlag :country="tvshow.original_language" size="small"/>
        </span>
      </div>
      <p>Score: {{ tvshow.vote_average }}</p>
    </li>
  </ul>
  </div>
</template>

<style scoped>
  
</style>
