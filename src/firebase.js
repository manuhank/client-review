const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

const app = firebase.initializeApp({
  apiKey: "AIzaSyAyNCySU4mJCEaI9bwEMFRRPUsf0wr92ko",
  authDomain: "review-san-pablo.firebaseapp.com",
  databaseURL: "https://review-san-pablo.firebaseio.com",
  projectId: "review-san-pablo",
  storageBucket: "review-san-pablo.appspot.com",
  messagingSenderId: "691202961818"
  });

export const db = app.database();
export const reviews = db.ref('reviews');