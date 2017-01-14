import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';

import '../teams/teams.js'

Meteor.subscribe('teams');
Meteor.subscribe('players');
Meteor.subscribe('games');

Template.addGame.helpers({
  addGametoGames () {
    return Games;
  },
  teams: function() {
    var teamId = FlowRouter.getParam('teamId');
    return Teams.findOne({teamId: teamId});
  }
});

Template.game.helpers({
  games: ()=> {
    var gameId = FlowRouter.getParam('gameId');
    return Games.find({gameId: gameId});
  },
  teams: function() {
		var teamId = FlowRouter.getParam('teamId');
		return Teams.findOne({teamId: teamId});
  }
});

Template.singleGame.helpers({
  teams: ()=> {
    var teamId = FlowRouter.getParam('teamId');
    return Teams.findOne({teamId: teamId});
  },
  games: ()=> {
    var gameId = FlowRouter.getParam('gameId');
    return Games.findOne({gameId: gameId});
      }
});
