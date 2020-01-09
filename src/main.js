import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// const firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");

Vue.config.productionTip = false

// var config = {
//   apiKey: "AIzaSyAyNCySU4mJCEaI9bwEMFRRPUsf0wr92ko",
//   authDomain: "review-san-pablo.firebaseapp.com",
//   databaseURL: "https://review-san-pablo.firebaseio.com",
//   projectId: "review-san-pablo",
//   storageBucket: "review-san-pablo.appspot.com",
//   messagingSenderId: "691202961818"
// };
// firebase.initializeApp(config);
// Vue.prototype.$firebase = firebase;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
