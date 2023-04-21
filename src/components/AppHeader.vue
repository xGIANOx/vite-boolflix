<script>
import { store } from './../store'
export default {
  name: "AppHeader",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
    <header>

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <img src="../assets/img/boolflix.png" alt="BoolFlix logo" class="boolflix_logo">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-4 align-items-center" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Film</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Serie TV</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Originali</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Aggiunti di recente</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">La mia lista</a>
              </li>
            </ul>
            <!-- <form class="d-flex" role="search"> -->
              <input type="text" class="form-control text-center search_box bg-black text-white border-0" placeholder="What are you watching today?" v-model='store.searchText'  @keyup.enter="store.fetchMovies(), store.fetchTvShows()">
            <!-- </form> -->
            <ul class=" mb-2 mb-lg-0 ms-2 d-flex p-0 align-items-center">
              <li class="mx-2">
                <font-awesome-icon icon="bell" class="text-dark bell_icon d-flex align-self-center text-white"/>
              </li>
              <li class="mx-2 text-white d-flex align-items-center">
                Giano<img src="../assets/img/boolflix-avatar.png" alt="boolflix avatar" class="avatar ms-3">
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
</template>

<style scoped>
header{
  z-index: 100;
  position: relative;
}
.navbar{
  background: linear-gradient(90deg, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.1) 100%);
}
ul{
  list-style: none;
}
  .boolflix_logo{
    width: 100px;
  }
  .search_box{
    width: 250px;
  }
  .avatar{
    width: 30px;
  }
  .bell_icon{
    font-size: 1.25rem;
    padding-top: 2px;
  }
</style>