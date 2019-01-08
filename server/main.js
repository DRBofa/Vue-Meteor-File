import { Meteor } from 'meteor/meteor';
import Files from '/both/file'
import _ from 'lodash'
Meteor.startup(() => {
 
  // import '/both/methods';

  Meteor.methods({
    findFile() {
      if (Meteor.isServer) {
        console.log('Server work');
        Meteor._sleepForMs(300)
        let data = Files.collection.find({}).fetch();
        let arr = []
        _.forEach(data, o => {
          arr.push({
            link: Files.link(o),
            doc: o,
            _id: o._id
          })
        })
        console.log('link', arr);
        return arr
      }
    },
    removeFile(_id){
      //remove file and collection
      if (Meteor.isServer) {
        return Files.remove({_id:_id})
      }
    }
  })
});
