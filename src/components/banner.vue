<template>
  <v-layout
    column
    align-center
    justify-center
    fill-height
    class="fondoAzul"
    :class="[paso !== 2 ? full : mitad]"
  >
    <img src="../assets/logo.svg" alt :class="[paso == 1 ? logoG : logoM]" class="ma-5">

    <listaTransparente v-if="paso == 1" />
  <agradecimiento v-if="paso == 3" />
    <v-btn fab class="ma-3" v-if="paso == 1" @click="siguientePaso">
      <v-icon>arrow_forward_ios</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
import listaTransparente from "./listaTransparente";
import agradecimiento from "./agradecimiento";
export default {
  components: {
    listaTransparente,
    agradecimiento
  },
  props: ["paso"],
  data: () => ({
    aclaraciones: [
      { texto: "Nos ayudas a mejorar", icono: "trending_up" },
      { texto: "Te lleva segundos", icono: "av_timer" },
      { texto: "Es totalmente anonima", icono: "supervised_user_circle" }
    ],
    full: "full",
    mitad: "mitad",
    logoG: "logoG",
    logoM: "logoM"
  }),
  methods: {
    siguientePaso() {
      this.$emit("inicio");
    }
  }
};
</script>

<style scoped>
.lista {
  vertical-align: middle;
}
</style>