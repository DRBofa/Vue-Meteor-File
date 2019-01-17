import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    ServiceConfiguration.configurations.remove({
        service: "facebook"
      });
      
      ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: '2128829987159963',
        secret: 'd7d616f1e305ee6018ba951de73e1305'
      });
      
});
