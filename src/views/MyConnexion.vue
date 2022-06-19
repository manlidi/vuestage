<template>
        <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Veuillez vous connecter</h5>
                    <p class="text-center small">Entrer des informations valides</p>
                  </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label"  >Your Email</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" v-model="email" required>
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" v-model="password" required>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>
                    <br>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit" :disabled="!email && !password" @click="connexion" >Se connecter</button>
                    </div>
                    <br>
                    <div class="col-12">
                      <p class="small mb-0">Vous n'avez pas un compte? <a href="pages-login.html"> <router-link to="/inscription">Inscrivez-vous!</router-link></a></p>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
<!-- End #main -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  

  <!-- Template Main JS File -->
  

<router-view />
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import router from '../router';
import {db} from '../main';

export default {
    name:"MyConnexion",
    data(){
        return{
            email:"",
            password:"",
            initials:""
        }
    },
    methods:{
        connexion() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    console.log(user)
                    if(this.email == "admin@gmail.com" && this.password == "admin123"){
                        router.push('/admin')
                    }else if(this.email && this.password){
                        db.collection('users').doc(user.user.uid).set({email:this.email})
                        router.push('/profil/pro')
                    }
                },
                (err) => {
                    alert('Veuillez entrer des informations valides!')
                    console.log(err)
                }
            )
        }
    }
}
</script>
<style>
.formulaire{
    width: 500px;
    height: 300px;
    background-color: whitesmoke;
    text-align: center;
}   
.containe{
    padding-left: 400px;
}
</style>