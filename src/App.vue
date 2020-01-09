<template>
  <v-app class="fondoGris">
    <v-content>    
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .fondoAzul {
    background-color: #074A83
  }
  .fondoGris{
    background-color: #EDEDED
  }
  .blanco {
   color:white
    }
  .full{
    height: 100vh;
    transition: 1s;
  }
  .mitad{
    height: 40vh;
    transition: 1s;
  }
  .logoG{
    height: 20vh;
  }
  .logoM{
    height: 10vh;
    transition: 1s;
  }
</style>

