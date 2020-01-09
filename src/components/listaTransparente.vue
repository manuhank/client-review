<template>
  <div class="ma-3">
    <div v-for="(item, index) in aclaraciones" :key="index">
      <v-divider v-if="index" color="white"></v-divider>
      <v-layout align-center class="my-2">
        <v-icon dark style="font-size: 2.8em">{{item.icono}}</v-icon>
        <span class="headline blanco mx-2">{{item.texto}}</span>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    aclaraciones: [
      { texto: "Nos ayudas a mejorar", icono: "trending_up" },
      { texto: "Te lleva segundos", icono: "av_timer" },
      { texto: "Es totalmente anonima", icono: "supervised_user_circle" }
    ]
  })
};
</script>

<style scoped>
</style>