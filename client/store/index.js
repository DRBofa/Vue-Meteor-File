import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { platform } from 'os';

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        loadedMeetups: [],

    },
    mutations: {

        createDoc(state, payload) {
            state.loadedMeetups.push(payload)
        },

    },
    actions: {

        removeDoc_File({},payload) {
            // console.log(payload.filename);
            // console.log(payload._id);
            let desertRef =firebase.storage().ref('pos/'+payload._id+payload.ext)
            // .child('pos/'+'-LXazBOYGUfdMiOa4bEb.pdf');
            // firebase.storageRef.child('pos/'+'.'+''+payload.filename);
            // Delete the file
            desertRef.delete().then(function () {
                Meteor.call('removeDoc',payload._id,(error,result)=>{
                    if(!error){
                        console.log('Removed file'+payload._id+payload.ext);
                    }
                })
                // File deleted successfully
            }).catch(function (error) {
                // Uh-oh, an error occurred!
            });
        },
        createDoc({}, payload) {
            const doc = {
                name: payload.name,
                age: payload.age,
                fileUrl: '',
            }
            let key
            let ext
           Meteor.call('insertDoc',doc,(error,result)=>{
               if(!error){
                   key=result
                   const filename = payload.myfile.name
                     ext = filename.slice(filename.lastIndexOf('.'))
                   firebase.storage().ref('pos/' + key + ext).put(payload.myfile)
                   .then((fileData)=>{
                    fileData.ref.getDownloadURL().then((url) => {
                        return url
                    })
                    .then((fileUrl)=>{

                        let data = {
                            _id:key,
                            name: payload.name,
                            age: payload.age,
                            fileUrl: fileUrl,
                            ext:ext,
                        }
                        // meteor update
                        Meteor.call('updateDoc',data,(error,result)=>{
                            if(!error){
                                console.log('Uploaded!');
                            }
                        })
                    })
                   })
                   .catch((error)=>{
                       console.log(error);
                   })
               }
           })
        }
        // 
    },
    getters: {
        user(state) {
            return state.user
        },
        error(state) {
            return state.error
        },
        loading(state) {
            return state.loading
        },
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })

            }
        }
    }
})



// https://stackoverflow.com/questions/53026245/uploading-images-to-firebase-from-vuejs-app