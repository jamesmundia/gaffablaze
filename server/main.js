// SERVER CODE
import { Meteor } from 'meteor/meteor';

import '../imports/api/data.js';

import { Teams } from '../imports/api/data.js';
import { Players } from '../imports/api/data.js';
import { Schemas } from '../imports/api/data.js';
import { Games } from '../imports/api/data.js';

Meteor.publish('teams', function () {
  var userId = this.userId;
  currentUserTeams = Teams.find({ "coach": userId });
    if (currentUserTeams) {
      return currentUserTeams;
    }
  return this.ready();
});

// single Team subscription for performance
/*
Meteor.publish('singleTeam', function(teamId){
  check(teamId, String);
  return Teams.find({teamId: teamId});
});
*/

Meteor.publish('players', function () {
  return Players.find();
});

Meteor.publish('games', function () {
  return Games.find();
});

Meteor.startup(() => {

});
