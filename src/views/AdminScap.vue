<template>
<br><br><br>
<div class="container" style="text-align: center;">
    <h3>Veuillez cliquer sur les boutons pour scraper</h3>
    <br><br>
    <button class="btn btn-info" @click='scrapper'>Bénin</button>&nbsp;
    <button class="btn btn-info" @click='scraperBurkina'>Burkina-Faso</button>&nbsp;
    <button class="btn btn-info" @click='scraperCote'>Cote d'Ivoire</button>&nbsp;
    <button class="btn btn-info" @click='scraperGuinee'>Guinné Bissau</button>&nbsp;
    <button class="btn btn-info" @click='scraperMali'>Mali</button>&nbsp;
    <button class="btn btn-info" @click='scraperNiger'>Niger</button>&nbsp;
    <button class="btn btn-info" @click='scraperSenegal'>Senegal</button>&nbsp;
    <button class="btn btn-info" @click='scraperTogo'>Togo</button>&nbsp;
    </div>
</template>
<script>
import axios from 'axios'
export default {
name: "AdminScap",
methods: {
    scrapper() {
        let one =
            "http://127.0.0.1:8000/api/lien";

        const requestOne = axios.get(one);

        axios
            .all([requestOne])
            .then(
            axios.spread((responses) => {
                const responseOne = responses[0];

                console.log(responseOne);
            }))
            .catch(errors => {
            console.error(errors);
            }
        );
    },
    scraperBurkina(){
        let two = "http://127.0.0.1:8000/api/scrapDataBurkina";

        const requestTwo = axios.get(two);

        axios
            .all([requestTwo])
            .then(
            axios.spread((responses) => {
                const responseTwo = responses[0];

                console.log(responseTwo);
            }))
            .catch(errors => {
            console.error(errors);
            }
        );
    },
    scraperCote(){
        let three = "http://127.0.0.1:8000/api/scrapDataCote";

        const requestThree = axios.get(three);

        axios
            .all([requestThree])
            .then(
            axios.spread((responses) => {
                const responesThree = responses[0];

                console.log(responesThree);
            }))
            .catch(errors => {
            console.error(errors);
            }
        );
    },
    scraperGuinee(){
        let four = "http://127.0.0.1:8000/api/scrapDataGuinee";
        const request4 = axios.get(four);

        axios
            .all([request4])
            .then(
            axios.spread((responses) => {
                const respones4 = responses[0];

                console.log(respones4);
            }))
            .catch(errors => {
            console.error(errors);
            }
        );
    },
    scraperMali(){

        let five = "http://127.0.0.1:8000/api/scrapDataMali";    
            
        const request5 = axios.get(five);

        axios
            .all([request5])
            .then(
            axios.spread((responses) => {
                const respones5 = responses[0];

                console.log(respones5);
            }))
            .catch(errors => {
            console.error(errors);
            }
        );
    },
    scraperNiger(){
        let six = "http://127.0.0.1:8000/api/scrappDataNiger";      

        const request6 = axios.get(six);

        axios
            .all([request6])
            .then(
            axios.spread((responses) => {
                const respones6 = responses[0];

                console.log(respones6);
            }))
            .catch(errors => {
            console.error(errors);
            }
        );
    },
    scraperSenegal(){

        let seven = "http://127.0.0.1:8000/api/scrappDataSenegal";

        const request7 = axios.get(seven);

        axios
            .all([request7])
            .then(
            axios.spread((responses) => {
                const respones7 = responses[0];

                console.log(respones7);
            }))
            .catch(errors => {
            console.error(errors);
            }
        );
    },
    scraperTogo(){
        let heigth =
            "http://127.0.0.1:8000/api/scrappDataTogo";

        const request8 = axios.get(heigth);

        axios
            .all([request8])
            .then(
            axios.spread((responses) => {
                const respones8 = responses[0];

                console.log(respones8);
            }))
            .catch(errors => {
            console.error(errors);
            }
        );
    }
}
}


</script>