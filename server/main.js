// SERVER CODE
import { Meteor } from 'meteor/meteor';

import '../imports/api/data.js';

import { Teams } from '../imports/api/data.js';
import { Players } from '../imports/api/data.js';
import { Schemas } from '../imports/api/data.js';
import { Games } from '../imports/api/data.js';
import { check } from 'meteor/check';

Meteor.publish('teams', function () {
  var userId = this.userId;
  currentUserTeams = Teams.find({ "coach": userId });
    if (currentUserTeams) {
      return currentUserTeams;
    }
  return this.ready();
});

Meteor.publish('singleTeam', function(teamId) {
  check(teamId, String);
  return Teams.find({ "teamId": teamId });

});

Meteor.publish('players', function () {
  return Players.find();
});

Meteor.publish('games', function () {
  var userId = this.userId;
  currentUserGames = Games.find({ "coach": userId });
    if (currentUserGames) {
      return currentUserGames;
    }
  return this.ready();});

Meteor.startup(() => {

});
