<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" style="color:blue;">MHemplois</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/"><b>Home</b></router-link>      
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test"><b>Test</b></router-link>      
        </li>
        
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="btn"><router-link style="text-decoration:none; color:black;" to="/inscription"><b>Inscription</b></router-link></button> &nbsp;
        <button class="btn btn-outline-primary my-2 my-sm-0" type="btn"><router-link style="text-decoration:none; color:black;" to="/connexion"><b>Connexion</b></router-link></button>
      </form>
    </div>
  </nav>
</template>