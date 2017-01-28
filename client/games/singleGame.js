import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';

import '../teams/teams.js'

Template.singleGame.onCreated(function () {
    const self = this;
    self.autorun(function () {
      var id = FlowRouter.getParam('_id');
      var teamId = FlowRouter.getParam('teamId');
      self.subscribe('singleGame', id);
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
    var id = FlowRouter.getParam('_id');
    return Games.findOne({ _id: id });
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
