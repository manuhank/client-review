import Vue from 'vue'
import Vuex from 'vuex'
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    review:{
      calidad:null,
      tiempo:null,
      atencion:null
    }
  },
  mutations: {
    
  },
  actions: {
    
  }
})
