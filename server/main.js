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

  teamRoster = [
   Teams.find({ teamId: teamId }),
   Players.find({ teamId: teamId }),
];

  if (teamRoster) {
    return teamRoster;
}
return this.ready();
});

Meteor.publish('singleGame', function(id, teamId) {
  //check(id, String);

    thisGame = [
    Games.find({ id: id }),
    Teams.find({ teamId: teamId })
    ]
    if (thisGame) {
      return thisGame;
    }
    return this.ready();
});

Meteor.publish('games', function () {
  var userId = this.userId;
  currentUserGames = Games.find({ "coach": userId });
    if (currentUserGames) {
      return currentUserGames;
    }
  return this.ready();
});

Meteor.publish('gameList', function(teamId) {
  currentTeamSchedule = Games.find({ teamId: teamId });
  if (currentTeamSchedule) {
    return currentTeamSchedule;
  }
  return this.ready();
})

Meteor.startup(() => {

});
