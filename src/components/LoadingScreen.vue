<script>
  export default {
    name: "LoadingScreen"
  };
</script>

<template>
      <video src="../assets/video/BiodegradableEnergeticHarborporpoise.mp4" autoplay muted></video>
</template>
  
<style scoped>
    video{
        height: 100vh;
        width: 100vw;
        z-index: 1000;
        line-height: 100vh;
        position: absolute;
        top: -35px;
        left: 0;
        background-color: black;
    }
</style>