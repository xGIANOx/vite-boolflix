import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
  searchText: "",
  foundedMovies: [],
  API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=9e8ac7b4623187f4dde6d864b45880ac&language=en-US&page=1&include_adult=false',
  fetchMovies() {
    let new_url = `${this.API_URL}&query=${this.searchText}`;
      axios
        .get(new_url)
        .then(results => {
            this.foundedMovies = results.data.results;
            console.log(results.data.results);
          
        })
        .catch(err => {
          console.log(err);
          console.error(err.message);
        })
    }
});