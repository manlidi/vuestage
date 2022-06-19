<template>
<br><br>
    <div class="containe"><br>
        <div class="formulaire">
            <br>
            <h5>Veuillez complétez votre profil</h5><br>
            <input type="text" id="nom" style="width: 400px; border-radius:5px" v-model="profil.nom" placeholder="Nom"><br><br>            
            <input type="text" id="prenom" style="width: 400px; border-radius:5px" v-model="profil.prenom" placeholder="Prénoms"><br><br>
            <input type="text" id="numero" style="width: 400px; border-radius:5px" v-model="profil.numero" placeholder="Numero de téléphone"><br><br>            
            <input type="text" id="activite" style="width: 400px; border-radius:5px" v-model="profil.activite" placeholder="Domaine d'activité"><br><br>
            <input type="text" id="pays" style="width: 400px; border-radius:5px" v-model="profil.pays" placeholder="Votre Pays"><br><br>                            
            <button class="btn btn-primary" @click="save">Enregistrer</button><br><br>
        </div>      
    </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import {db} from '../main';
import router from '../router';

export default {
    data(){
        return{
            profil:{
                nom:null,
                prenom:null,
                numero:null,
                activite:null,
                pays:null
            }
        }
    },
    methods:{
        firestore(){
            const user = firebase.auth().currentUser;
            return{
                profils : db.collection('users').doc(user.uid)
            }
        },
        save(){
            this.firestore().profils.update(this.profil)
            alert("Votre profil a bien été mis à jour")
            router.push('/profil')
        },
    },
    created(){
        //var user = firebase.auth().currentUser;
        //this.nom = user.displayName;
    }
}
</script>
<style>
.formulaire{
    width: 550px;
    height: 350px;
    background-color: whitesmoke;
    text-align: center;
}   
.containe{
    padding-left: 400px;
}
</style>