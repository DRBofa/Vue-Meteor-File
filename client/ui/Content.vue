<template>
    <div>

       <button @click="getFile">Get File</button>
      
       <iframe width="100%" height="720px"  :src="fileUrl"></iframe>
     
    </div>
</template>
<script>
import {Meteor} from 'meteor/meteor'
export default {
    name:'myApp',
    data(){
        return{
            fileUrl:null,
            name:'',
            age:'',
            myfile:null,
            _id:'',
            ext:'',
        }
    },
    methods:{

        getFile(){
            Meteor.call('findDoc',(error,result)=>{
                if(!error){
                    console.log(result);
                    this.fileUrl=result[0].fileUrl+'#toolbar=0&navpanes=0&scrollbar=0#view=FitH'
                    this.name=result[0].name
                    this.age=result[0].age
                    this._id=result[0]._id
                    this.ext=result[0].ext
                }
                console.log(error);
            })
        },

    }
}
</script>
