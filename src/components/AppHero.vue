<script>
import { store } from './../store'
export default {
  name: "AppHero",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
    <div class="container_xl">
        <div class="hero position-relative">
            <video id="video-container" autoplay muted loop>
                <source src='../assets/video/HUNGER _ Official Trailer _ Netflix (online-video-cutter.com).mp4' type='video/mp4'>
            </video>

            <div class="hero_info">
                <div class="info_container">
                    <div class="n_series d-flex align-items-center">
                    <img class="netflix_icon" src="../assets/img/PngItem_1041504.png" alt="">
                    <span class="ms-2 series"> S E R I E S</span>
                </div>
                <h1>HUNGER</h1>
                <div class="hero_movie_info d-flex">
                    <div class="compatibility"> 97% Match</div>
                    <span class="ms-2 year">2023</span>
                </div>
                <p class="p-0 mt-2 col-5 hero_plot" width="33%">
                    Experience the kind of hunger you have never seen before…
                    In Hunger.

                    Written and produced by Kongdej Jaturanrasmee.
                    Directed by Sitisiri Mongkolsiri.

                    Aoy (Chutimon Chuengcharoensukying) runs her family’s local stir-fried noodles restaurant. Her life is about to change when she decides to join team HUNGER, led by Chef Paul (Nopachai Jayanama) who introduces her to the dark sides of the fine-dining industry.
                </p>
            </div>
                </div>
        </div>
    </div>
</template>

<style scoped>
.container_xl{
    background: linear-gradient(90deg, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%);
}
    video{
        width: 100%;
        padding: 0;
        margin-top: -60px;
        position: relative;
        z-index: -1;
    }
    .hero_info{
        position: absolute;
        bottom: 50%;
        transform: translatey(50%);
        z-index: 100;
        height: 100%;
        width: 100%;
        
    }
    .info_container{
        position: absolute;
        margin-left: 50px;
        bottom: 50px;
    }
    
    h1{
        font-size: 5rem
    }
    .netflix_icon{
        width: 15px;
    }
    .series{
        font-size: 0.75rem;
        font-weight: 200;
    }
    .n_series, 
    .hero_movie_info,
    p{
        margin-left: 5px;
    }
    .compatibility{
        font-size: 0.85rem;
        color: rgb(9, 185, 9);
        font-weight: bold;
    }
    .year{
        font-size: 0.85rem;
        font-weight: 200;

    }
    .hero_plot{
        font-size: 0.9rem;
        color: rgb(210, 209, 209);
    }
</style>