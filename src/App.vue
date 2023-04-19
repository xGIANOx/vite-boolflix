<script>
import { store } from './store'

export default{
  components:{

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
      <input type="text" class="form-control" placeholder="What are you watching today?" v-model='store.searchText'>
      <button class="btn btn-outline-secondary" type="button" @click="store.fetchMovies()">Search</button>
    </div>
  </div>

  <div class="film_list">
    <ul>
    <li v-for="movie in store.foundedMovies">
      
      <p>Title: {{ movie.title }}</p>
      <p>Original title: {{ movie.original_title }}</p>
      <p>Language: {{ movie.original_language }}</p>
      <p>Score: {{ movie.vote_average }}</p>
    </li>
  </ul>
  </div>
</template>

<style scoped>
  
</style>
