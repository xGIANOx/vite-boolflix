import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
  searchText: "",
  foundedMovies: [],
  foundedTvShows: [],
  API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=9e8ac7b4623187f4dde6d864b45880ac&page=1',
  API_URL_TV: 'https://api.themoviedb.org/3/search/tv?api_key=9e8ac7b4623187f4dde6d864b45880ac&page=1',
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
    },
    fetchTvShows() {
        let new_url_show = `${this.API_URL_TV}&query=${this.searchText}`;
          axios
            .get(new_url_show)
            .then(results => {
                this.foundedTvShows = results.data.results;
                console.log(results.data.results);
            })
            .catch(err => {
              console.log(err);
              console.error(err.message);
            })
        }
});