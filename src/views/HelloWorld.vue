<template>
<br><br>
  <div class="container">
    <div v-for="(info, index) in filteredList" :key="index">
      <div class="" id='app'>
        <div class="card">
          <div class="jumbotron">
            <div class="row">
              <div class="col-sm-5">
                <div style="text-align:left;">
                  <b>Titre du Poste:</b>&nbsp;&nbsp;{{info.poste}}<br><br>
                  <b>Date de Publication:</b>&nbsp;&nbsp;{{info.date_publication}}<br><br>
                  <audio style="padding-top:20px" preload="auto" controls loop><source :src="info.audio" type="audio/mp3"></audio><br><br>
                  <b>Autre Informations:</b>&nbsp;&nbsp;{{info.experience}}<br>{{info.pays}}
                </div>
              </div>
              <div class="col-sm-7">
                <div>
                  <qrcode-vue :value="info.lien" size="200" level="H"/><br><br>
                  <p style="color:red;">Scanner ce code QR pour plus d'information sur l'offre!</p>
                  <p><a :href="info.lien">Vous n'avez pas l'application qui permet de scanner? Cliquez ici</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <div style="text-align:center;">
          <button class="btn btn-info" type="button" :disabled="currentPage === 1" @click="changePage(-1)">Precedent</button>&nbsp;
          <button class="btn btn-danger" type="button" :disabled="currentPage === 40" @click="changePage(1)">Suivant</button>&nbsp;
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
import axios from 'axios'
import QrcodeVue from 'qrcode.vue'

//import VueTextToSpeech from 'vue-text-to-speech'
export default {
  components: {
    QrcodeVue,
    //VueTextToSpeech
  },
  computed: {
    filteredList () {
      console.log('this.currentPage', this.currentPage)
      const star = (this.currentPage - 1) * this.prePage
      const end = this.currentPage * this.prePage
      console.log(star, end)
      console.log('computed', this.list)
      console.log('result', this.list.slice(star, end))
      const result = this.list.slice(star, end)
      return result
    }
  },
  data () {
    return {
      list: [],
      prePage: 1,
      currentPage: 1
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/OffreInfo')
      .then(response => {
        this.list = response.data
      })
      .catch(error => console.log(error))
  },
  methods: {
    changePage (num) {
      console.log('num', num)
      console.log('this.currentPage', this.currentPage)
      this.currentPage = this.currentPage + num
    }
  }
}
</script>
