import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
//import 'boxicons'
//import 'quill-vuejs/dist/quill-vuejs'
//import 'quill-vuejs/src/index'
//import 'remixicon/fonts/remixicon.css'
//import 'simple-vue-datatable/src/main'
import router from './router'
import 'firebase/compat/firestore'
import firebase from "firebase/compat/app"
import 'firebase/compat/functions'

const firebaseConfig = {
    apiKey: "AIzaSyDBbxJfG4EcZkeDiH3EemNcvCNtmfHNfpg",
    authDomain: "infooffre.firebaseapp.com",
    projectId: "infooffre",
    storageBucket: "infooffre.appspot.com",
    messagingSenderId: "697621530729",
    appId: "1:697621530729:web:d7cd139886a8affb29faf8",
    measurementId: "G-95D2H7MEN2"
};


// Initialize Firebas
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const functions = firebase.functions();
createApp(App).use(router).mount('#app')

//const analytics = getAnalytics(app);