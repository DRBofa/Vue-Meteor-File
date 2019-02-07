import Vue from 'vue';
import App from './App';
import './main.html';
import * as firebase from 'firebase'
import {store} from './store'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './routers/router'

// import pdf from 'vue-pdf-lh'
// vue.use(pdf)
// import '/webpack.config'
Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
    store,
    created(){
      firebase.initializeApp({
        apiKey: "AIzaSyA2oCFWLrPK77wzACeaOFv8N8-hyH_YGTU",
        authDomain: "create-update-file.firebaseapp.com",
        // facebook
        // authDomain: "https://vue-firebase-6f613.firebaseapp.com/__/auth/handler", //for facebook
        databaseURL: "https://create-update-file.firebaseio.com",
        projectId: "create-update-file",
        storageBucket: "create-update-file.appspot.com",
       messagingSenderId: "593450601341"
      });
      // firebase.initializeApp(config);
    }
  });
});