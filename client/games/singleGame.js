import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';
import { IndyGameEvals } from '../../imports/api/data.js';

import '../teams/teams.js'

Template.singleGame.onCreated(function () {
    const self = this;
    self.autorun(function () {
      var gameId = FlowRouter.getParam('gameId');
      var teamId = FlowRouter.getParam('teamId');
      self.subscribe('singleGame', gameId);
      self.subscribe('singleTeam', teamId);
    });
    this.updateGameMode = new ReactiveVar(false);
});
Template.singleGame.events({
  'click .update-game': function (event, template) {
    template.updateGameMode.set(!template.updateGameMode.get())
  },
});
Template.singleGame.helpers({
  teams: () => {
    var teamId = FlowRouter.getParam('teamId');
    return Teams.findOne({ teamId: teamId });
  },
  games: ()=> {
    var gameId = FlowRouter.getParam('gameId');
    return Games.findOne({ gameId: gameId });
  },
  players: () => {
    //only show players with this teamId, use for now instead of template level subs
    var teamId = FlowRouter.getParam('teamId');
    return Players.find({ teamId: teamId });
  },
  updateGameMode: function () {
    return Template.instance().updateGameMode.get();
  },
});

Template.indyPlayerEvalsForGame.helpers({
  indyPlayerEvalGameSchema() {
    return Schemas.indyPlayerEvalForGameSchema;
  },
  playersForGameEvals() {
    return Players;
  }
});
