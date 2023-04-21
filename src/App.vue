<script>
import { store } from './store'
import CountryFlag from '../node_modules/vue-country-flag-next'
import AppHeader from "./components/AppHeader.vue"
import AppHero from "./components/AppHero.vue"
import AppMain from "./components/AppMain.vue"
import LoadingScreen from "./components/LoadingScreen.vue"
import MyList from "./components/MyList.vue"


export default{
  components:{
    CountryFlag,
    AppHeader,
    AppHero,
    AppMain,
    LoadingScreen,
    MyList,
  },
  data(){
    return{
      store,
      isLoading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
</script>

<template>

  <LoadingScreen v-if="isLoading"></LoadingScreen>
  <AppHeader></AppHeader>
  <AppHero></AppHero>
  <AppMain></AppMain>
  <MyList v-if="!isLoading"></MyList>

  

</template>

<style scoped>
  .mx_2{
    margin: 0 2px;
  }
</style>