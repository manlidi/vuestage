<template>
<br>
    <h6 style="float:right;margin:10px;">Bienvenu <b>{{nom}}</b></h6>
    <div class="dropdown" style="float:left;margin:10px;">
      <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <router-link class="dropdown-item" to="/profil/pro">Compléter Profil</router-link>
        <router-link class="dropdown-item" to="/profil/search">Rechercher une offre</router-link>
        <button class="dropdown-item" @click="deconnexion">Deconnexion</button>
      </div>
    </div>
   
    <router-view/>
</template>
<script>

import firebase from 'firebase/compat/app'
import router from '../router'
import {ref, onBeforeMount} from 'vue';
//import {useRoute} from 'vue-router';
import {db} from '../main';
//import home from '@/views/HelloWorld.vue'

export default {
  components:{
   // home
  },
    data(){
      return{
        offres:[]
      }
    },
    mounted(){
      this.getOffresList()
    },
    methods: {
        deconnexion(){
            firebase.auth().signOut();
            router.push('/');
            alert("Vous etes bien déconnecté!")
        },
        getOffresList(){
                db.collection('InfoOffre')
                .get()
                .then(querySnapshot => {
                    this.offres = querySnapshot.docs.map(doc => doc.data());
                    console.log(this.offres);
                });
            },
    },
    setup(){
    /*const routes = useRoute();
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) =>{
        if(!user){
          router.push('/')
        }else if(routes.path == "/connexion" || routes.path == "/inscription"){
          router.push('/profil')
        }
      });
    });*/

    const nom = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if(user){
        nom.value = user.email.split('@')[0];
      }
    });
    return {
    nom }
  }
  
}

</script>
