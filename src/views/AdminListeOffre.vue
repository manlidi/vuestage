<template>
<br><br><br>
    <h3 style="text-align:center;">Gérer les offres</h3>
    <br><br>
    <div class="container">
        <table class="table table-bordered table-danger">
        <thead>
            <tr>
                <th>Titre</th> 
                <th>Date_publication</th>
                <th>Date_fin</th>
                <th>Pays</th>
                <th>Plateforme</th>
                <th>Lien</th>

                <th>Ajouter dans une nouvelle collection</th>
                
            </tr>
        </thead>
        <tbody v-for="(us,index) in offres" :key="index">
                <td>{{us.poste}}</td>
                <td>{{us.date_publication}}</td>
                <td>{{us.date_fin}}</td>
                 <td>{{us.pays}}</td>
                 <td>{{us.plateforme}}</td>
                  <td><a :href="us.lien">cliquez</a></td>
                <td><button style="float:center;" class="btn btn-info" @click="ajouter" >add</button></td>
                <td><button style="float:center;" class="btn btn-info"  >delete</button></td>

        </tbody>
    </table>
    </div>
</template>
<script>

import {db} from '../main';
export default{
    name: "AdminListeOffre",

    data(){
        return{
            offres:[]
        }
    },
    mounted(){
        this.getUsersList()
    },
    methods: {
        getUsersList(){
            db.collection('InfoOffre')
            .get()
            .then(querySnapshot => {
                this.offres = querySnapshot.docs.map(doc => doc.data());
                console.log(this.offres);
            });
        },
    },
}
</script>