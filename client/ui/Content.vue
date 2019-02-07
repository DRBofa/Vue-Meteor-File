<template>
<div>
  <div id="app">
     <h1>Hie</h1>
    </div>
</div>
</template>

<script>

import {
    Meteor
} from 'meteor/meteor'
export default {
   name: 'app',
  
    data() {

        return {
             pdfHeight: '500px',
            fileUrl: null,
            name: '',
            age: '',
            myfile: null,
            _id: '',
            ext: '',
            isshowpdf: false

        }
    },

   
    mounted() {
        this.getFile()
    },
    methods: {
        getFile() {
            Meteor.call('findDoc', (error, result) => {
                if (!error) {
                    this.fileUrl = result[0].fileUrl 
                    this.name = result[0].name
                    this.age = result[0].age
                    this._id = result[0]._id
                    this.ext = result[0].ext
                }
                console.log(error);
            })
        },

    }
}
</script>

<style>

</style>
