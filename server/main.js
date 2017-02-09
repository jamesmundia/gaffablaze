// SERVER CODE
import { Meteor } from 'meteor/meteor';
import '../imports/api/data';
import { Teams } from '../imports/api/data';
import { Players } from '../imports/api/data';
import { Schemas } from '../imports/api/data';
import { Games } from '../imports/api/data';
import { Sessions } from '../imports/api/data';
import { IndyGameEvals } from '../imports/api/data';
import { check } from 'meteor/check';

import '../imports/methods';

Meteor.publish('teams', function () {
  let userId = this.userId;
  currentUserTeams = Teams.find({ "coach": userId });
  if (currentUserTeams) {
    return currentUserTeams;
  }
  return this.ready();
});
Meteor.publish('singleTeam', function (teamId) {
  check(teamId, String);
  teamRoster = [
    Teams.find({ teamId: teamId }),
    Players.find({ teamId: teamId }),
    Sessions.find({ teamId: teamId })
  ];
  if (teamRoster) {
    return teamRoster;
}
  return this.ready();
});
Meteor.publish('singleGame', function (gameId) {
  check(gameId, String);
    thisGame = Games.find({ gameId: gameId });
  if (thisGame) {
      return thisGame;
    }
    return this.ready();
});
Meteor.publish('games', function () {
  let userId = this.userId;
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
});
Meteor.publish('singlePlayer', function (playerId, teamId) {
  check(playerId, String);
  check(teamId, String);
  onePlayer = [
    Players.find({ playerId: playerId }),
    Teams.find ({ teamId: teamId })
  ];
  if (onePlayer) {
    return onePlayer;
  }
  return this.ready();
});
Meteor.publish('singleSession', function (sessionId, teamId) {
  check(sessionId, String);
  check(teamId, String);
  thisSession = [
    Sessions.find({ sessionId: sessionId }),
    Teams.find({ teamId: teamId }),
];
  if (thisSession) {
    return thisSession;
  }
  return this.ready();
});

Meteor.publish('singleGameEvals', function (gameId){
  check(gameId, String);

  playerGameComments = IndyGameEvals.find({ gameId: gameId });

  if (playerGameComments) {
    return playerGameComments;
  }
return this.ready();
});

Meteor.startup(() => {
});
