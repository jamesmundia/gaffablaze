import { Meteor } from 'meteor/meteor';

import { Games } from '../imports/api/data';
import { Schemas } from '../imports/api/data';

Meteor.methods({
  'submitGame': function (addGame) {
    Games.insert(addGame);
  },
  'submitPlayer': function (addPlayer) {
    try {
     if (!this.userId()) {
       throw new Meteor.Error('500', 'Must be logged in to add new tacos.');
     }
     return
    // console.log('Player added');
    Players.insert(addPlayer);
  } catch (exception) {
    throw new Meteor.Error('500', exception.message);
  }
  },
  'submitTeam': function (addTeam) {
    Teams.insert(addTeam);
  },
  'addSessionMethod': function(addSession) {
    Sessions.insert(addSession);
  }
});
