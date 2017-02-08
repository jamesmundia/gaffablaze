import { Meteor } from 'meteor/meteor';

import { Games } from '../imports/api/data';
import { Players } from '../imports/api/data';
import { Teams } from '../imports/api/data';
import { Sessions } from '../imports/api/data';
import { Schemas } from '../imports/api/data';

import { check } from 'meteor/check';

Meteor.methods({
  'submitGame': function (addGame) {
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to add new games.');
    }
    Games.insert(addGame);
  },
  'submitPlayer': function (addPlayer) {
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to add new players.');
    }
    // console.log('Player added');
    Players.insert(addPlayer);
  },
  'submitTeam': function (addTeam) {
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to add new teams.');
    }
    Teams.insert(addTeam);
  },
  'addSessionMethod': function(addSession) {
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to add new sessions.');
    }
    Sessions.insert(addSession);
  }
});
