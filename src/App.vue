<template>
  <appheader />
  <router-view />
</template>

<script>
import appheader from '@/components/MyHeader.vue'
import firebase from 'firebase/compat/app';
import {onBeforeMount} from 'vue';
import router from './router';
import {useRoute} from 'vue-router';

export default {
  name: 'App',
  components: {
    appheader,
  },
  setup(){
    const routes = useRoute();
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) =>{
        if(!user){
          router.push('/')
        }else if(routes.path == "/connexion" || routes.path == "/inscription"){
          router.push('/profil')
          router.push('/profil/search')
        }
      });
    });
  }
}
</script>

