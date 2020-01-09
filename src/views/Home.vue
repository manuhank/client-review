<template>
  <div>
    <v-expand-transition>
      <banner :paso="paso" @inicio="siguiente"/>
    </v-expand-transition>
    <div style="position:relative; top:-10vh" v-if="paso == 2">
      <v-layout row justify-center>
        <reviewInterna @siguiente="siguiente"/>
      </v-layout>
    </div>
  </div>
</template>

<script>
import reviewInterna from "../components/reviewInterna";
import banner from "../components/banner";

export default {
  components: {
    reviewInterna,
    banner
  },
  data: () => ({
    paso: 1
  }),
  methods: {
    siguiente: function() {
      this.paso++;
      if (this.paso == 3){
      }
    }
  }
};
</script>
