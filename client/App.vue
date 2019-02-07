<template>
<div>
    <center>
        <h1>
            Facebook login Firebase <br>
        </h1>
         <button @click="loginFacebook()">login</button>
    </center>

</div>
</template>

<script>
import * as firebase from 'firebase'
// var config = {
//     apiKey: "AIzaSyA2oCFWLrPK77wzACeaOFv8N8-hyH_YGTU",
//     authDomain: "create-update-file.firebaseapp.com",
//     databaseURL: "https://create-update-file.firebaseio.com",
//     projectId: "create-update-file",
//     storageBucket: "create-update-file.appspot.com",
//     messagingSenderId: "63734693390"
// };

var provider = new firebase.auth.FacebookAuthProvider();

export default {

    methods: {
        loginFacebook() {
            firebase.auth().signInWithPopup(provider)
                .then(function (result) {
                    var token = result.credential.accessToken;
                    var user = result.user;
                    console.log(result);
                    console.log(token);
                    console.log(user);
                }).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    var email = error.email;
                    var credential = error.credential;
                    console.log(errorCode);
                    console.log(errorMessage);
                    console.log(email);
                    console.log(credential);

                })
        }
    }
}
</script>
