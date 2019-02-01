// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as firebase from 'firebase'
// import { platform } from 'os';

// Vue.use(Vuex)


// export const store = new Vuex.Store({
//     state: {
//         loadedMeetups: [],

//     },
//     mutations: {

//         createDoc(state, payload) {
//             state.loadedMeetups.push(payload)
//         },

//     },
//     actions: {

//         removeDoc_File({},payload) {
//             // console.log(payload.filename);
//             // console.log(payload._id);
//             let desertRef =firebase.storage().ref('pos/'+payload.filename)
//             // .child('pos/'+'-LXazBOYGUfdMiOa4bEb.pdf');
//             // firebase.storageRef.child('pos/'+'.'+''+payload.filename);
//             // Delete the file
//             desertRef.delete().then(function () {
//                 Meteor.call('removeDoc',payload._id,(error,result)=>{
//                     if(!error){
//                         console.log('Removed file'+payload.filename);
//                     }
//                 })
//                 // File deleted successfully
//             }).catch(function (error) {
//                 // Uh-oh, an error occurred!
//             });
//         },
//         createDoc({
//             commit,
//             getters
//         }, payload) {
//             const doc = {
//                 name: payload.name,
//                 age: payload.age,
//                 imageUrl: '',
//             }
//             let key=''
//             let ext
//             firebase.database().ref('pos').push(doc)
//                 .then((data) => {
//                      key = data.key
//                     return key
//                 })
//                 .then(key => {
//                     const filename = payload.image.name
//                      ext = filename.slice(filename.lastIndexOf('.'))
//                     return firebase.storage().ref('pos/' + key + ext).put(payload.image)
//                 })
//                 .then(fileData => {

//                     // console.log(fileData.ref.getDownloadURL());   
//                     fileData.ref.getDownloadURL().then((url) => {
//                         return url
//                     }).then((imageUrl) => {
//                         console.log(key);
//                         let data = {
//                             name: payload.name,
//                             age: payload.age,
//                             imageUrl: imageUrl,
//                             filename:key+ext,
//                         }
//                         Meteor.call('insertDoc', data, (error, result) => {
//                             if (!error) {
//                                 console.log('doc insert:'+result);
//                                 console.log(imageUrl);
//                             }
//                         })
//                         console.log('1' + imageUrl);
//                         imageUrl = imageUrl
//                         // .............................for update data in firebase

//                         firebase.database().ref.child(key).update({
//                             imageUrl: imageUrl
//                         })

//                     })



//                 })
//                 // .then(()=>{
//                 //     console.log('Create meetup');
//                 //      commit('createMeetup', { 
//                 //         ...meetup,
//                 //         imageUrl:imageUrl,
//                 //         id:key
//                 //     })
//                 // })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         }
//         // 
//     },
//     getters: {
//         user(state) {
//             return state.user
//         },
//         error(state) {
//             return state.error
//         },
//         loading(state) {
//             return state.loading
//         },
//         loadedMeetups(state) {
//             return state.loadedMeetups.sort((meetupA, meetupB) => {
//                 return meetupA.date > meetupB.date
//             })
//         },
//         featuredMeetups(state, getters) {
//             return getters.loadedMeetups.slice(0, 5)
//         },
//         loadedMeetup(state) {
//             return (meetupId) => {
//                 return state.loadedMeetups.find((meetup) => {
//                     return meetup.id === meetupId
//                 })

//             }
//         }
//     }
// })



// // https://stackoverflow.com/questions/53026245/uploading-images-to-firebase-from-vuejs-app