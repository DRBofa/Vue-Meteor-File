<template>
<div>
    <h1>I'm bona demo project Vue-meteor-File upload</h1>
    <input type="file" @change="selectFile">
    <button @click="btnFind">findFile</button>
    <!-- loop file to display -->
    <div
        v-for="item in dataImage"
        :key="item.link">
        <img v-if="item.doc.isImage"
             :src="item.link"
             width="200px"
             height="200px" />
        <audio v-if="item.doc.isAudio"
               controls
               controlsList="nodownload"
               height="auto"
               preload="auto">
          <source :src="item.link"
                  type="audio/mp3" />
        </audio>
        <video
       controls
               controlsList="nodownload"
            v-if="item.doc.isVideo"
            :src="item.link"
            style="width: 853px; height: 480px" />
        <button
            @click="onDelete(item._id)">Remove</button>
    </div>
    {{dataImage}}
</div>
</template>

<script>
// import {Meteor } from 'meteor/meteor'
import
ShopImage
from "../both/file";
export default {
    name: 'app',
    data() {
        return {
            dataImage: [],
        }
    },
    methods: {
        selectFile(e) {
            const file = e.currentTarget.files[0];
            ShopImage.insert({
                file: file,
                streams: 'dynamic',
                chunkSize: 'dynamic'
            });
        },
        onDelete(id){
            Meteor.call('removeFile',id,(err,re)=>{
                if(!err){
                    this.btnFind()
                }
                console.log(err);
            })
        },
        btnFind() {
            Meteor.call('findFile', (err, result) => {
                if (!err) {
                    this.dataImage = result
                }
                console.log(err);
            })
        }
    }
}
</script>
