<template>
    <v-card style="max-width:25em; min-width:350px" class="pa-5 ma-4">
        <v-layout column align-center>

        <v-flex v-for="(item, index) in evaluacion"
          :key="index"
          class="my-2">
    <h2>{{index}}:</h2>
    <v-rating large v-model="evaluacion[index]" color="accent" ></v-rating>
        </v-flex>

        <v-btn bottom centre absolute fab color="primary"  @click="enviar">
         <v-icon>arrow_forward_ios</v-icon>
         </v-btn>
        </v-layout>    
    </v-card>
</template>

<script>
    import {reviews} from '../firebase'
    export default {
        data:() => ({
            evaluacion: {
                Atención:0,
                Calidad:0,
                Tiempo:0
                }
        }),
        methods:{
            enviar(){
                this.$emit('siguiente')
            }
        }
    }
</script>

<style scoped>

</style>