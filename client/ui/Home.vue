<template>
    <div>
        <h1>File upload</h1>
       <center>
            Name:<input type="text" v-model="name">
        Age:<input type="text" v-model="age">
        Image<input type="file" accept="mp3/*" @change="pickFile"><br>
        <button @click="onSubmit">Submit to firebase</button>
       </center>
       <br>
       <br>
       <br>
       <br>
       <hr>
       <button @click="getFile">Get File</button>
       <!-- <img :src="fileUrl"> -->
       <audio controls :src="fileUrl"></audio>
       <iframe width="100%" height="720px"  :src="fileUrl"></iframe>
       <button @click="removeFile">Remove this file</button>
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
        pickFile(event){
            const files=event.target.files
            let filename=files[0].name
            
            if(filename.lastIndexOf('.')<=0){
             return   alert('Please add a valid file')
            }
            const fileReader=new FileReader
            fileReader.addEventListener('load',()=>{
                this.fileUrl=fileReader.result
                
            })
            fileReader.readAsDataURL(files[0])
            this.myfile=files[0]
        },
        onSubmit(){
            
            data={
                name:this.name,
                age:this.age,
                myfile:this.myfile,
            }
            
            this.$store.dispatch('createDoc',data)
        },
        getFile(){
            Meteor.call('findDoc',(error,result)=>{
                if(!error){
                    console.log(result);
                    this.fileUrl=result[0].fileUrl+'#toolbar=0&navpanes=0&scrollbar=0'
                    this.name=result[0].name
                    this.age=result[0].age
                    this._id=result[0]._id
                    this.ext=result[0].ext
                }
                console.log(error);
            })
        },
        removeFile(){
            
            let data={_id:this._id,ext:this.ext}
            this.$store.dispatch('removeDoc_File',data)
        }

    }
}
</script>
