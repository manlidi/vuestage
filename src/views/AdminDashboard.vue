<template>
<br><br><br>
    <h3>Liste des utilisateurs</h3>
    <br><br>
    <div class="container">
        <table class="table table-bordered table-danger">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénoms</th>
                <th>Email</th>
                <th>Domaine d'activité</th>
                <th>Pays</th>
            </tr>
        </thead>
        <tbody v-for="(us,index) in users" :key="index">
                <td>{{us.nom}}</td>
                <td>{{us.prenom}}</td>
                <td>{{us.email}}</td>
                <td>{{us.activite}}</td>
                <td>{{us.pays}}</td>
        </tbody>
    </table>
    </div>
</template>
<script>

import {db} from '../main';
export default{
    data(){
        return{
            users:[]
        }
    },
    mounted(){
        this.getUsersList()
    },
    methods: {
        getUsersList(){
            db.collection('users')
            .get()
            .then(querySnapshot => {
                this.users = querySnapshot.docs.map(doc => doc.data());
                console.log(this.users);
            });
        },
    },
}
</script>