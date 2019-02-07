import { Meteor } from 'meteor/meteor';
import myDoc from './mydoc'
Meteor.startup(() => {
    ServiceConfiguration.configurations.remove({
        service: "facebook"
      });
      
      ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: '2128829987159963',
        secret: 'd7d616f1e305ee6018ba951de73e1305'
      });

      Meteor.methods({
        insertDoc(doc){
          return myDoc.insert(doc)
        },
        findDoc(){
          return myDoc.find().fetch()
        },
        removeDoc(id){
          
          return myDoc.remove({_id:id})
        },
        updateDoc(doc){
          return myDoc.update({_id:doc._id},{$set:doc})
        }
      })
});
