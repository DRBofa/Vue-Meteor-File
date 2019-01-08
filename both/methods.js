import {
  Meteor
} from 'meteor/meteor'
import Files from './file'
Meteor.methods({
  findFile(selector,options) {
    if (Meteor.isServer) {
      Meteor._sleepForMs(300)
      selector = selector || {}
      options = options || {}
      // console.log('File', Files.collection);
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
  }
})