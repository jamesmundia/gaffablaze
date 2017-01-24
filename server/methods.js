import { Meteor } from 'meteor/meteor';

import { Games } from '../imports/api/data';
import { Schemas } from '../imports/api/data';

Meteor.methods({
  'submitGame': function (addGame) {
    Games.insert(addGame);
  },
  'submitPlayer': function (addPlayer) {
    Players.insert(addPlayer);
  },
  'submitTeam': function (addTeam) {
    Teams.insert(addTeam);
  }
});
