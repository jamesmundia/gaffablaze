import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';

import '../teams/teams.js'

Meteor.subscribe('teams');
Meteor.subscribe('players');
Meteor.subscribe('games');

Template.addGame.helpers({
  addGametoGames() {
    return Games;
  },
  teams: function () {
    var teamId = FlowRouter.getParam('teamId');
    return Teams.findOne({teamId: teamId});
  }
});

Template.updateGame.helpers({
  updateGames: function () {
    return Games;
  },
  thisGame: function () {
    var id = FlowRouter.getParam('_id');
    return Games.findOne({ _id: id });
  }
});

Template.game.helpers({
  games: ()=> {
    var id = FlowRouter.getParam('_id');
    return Games.findOne({ _id: id });
  },
  teams: function() {
		var teamId = FlowRouter.getParam('teamId');
		return Teams.findOne({teamId: teamId});
  }
});

Template.singleGame.helpers({
  teams: () => {
    var teamId = FlowRouter.getParam('teamId');
    return Teams.findOne({ teamId: teamId });
  },
  games: ()=> {
    var id = FlowRouter.getParam('_id');
    return Games.findOne({ _id: id });
  },
  players: () => {
    //only show players with this teamId, use for now instead of template level subs
    var teamId = FlowRouter.getParam('teamId');
    return Players.find({ teamId: teamId });
  }
});

Template.playerGameEval.helpers({
  playerEvalSchema: function () {
    return Games;
  },
  thisPlayerEvaluation: function () {
    var id = FlowRouter.getParam('_id');
    return Games.findOne({ _id: id });
  }
});
