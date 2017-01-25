import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';

import '../players/players.js';
import '../games/games.js';
import '../../lib/routing.js';

Meteor.subscribe('players');
Meteor.subscribe('games');

Template.teamPage.onCreated(function () {
  var self = this;
	self.autorun(function () {
		var teamId = FlowRouter.getParam('teamId');
		self.subscribe('singleTeam', teamId);
	})
  this.addPlayerMode = new ReactiveVar(false);
  this.addGameMode = new ReactiveVar(false);
});

Template.teamPage.events({
  'click .add-player': function (event, template) {
    template.addPlayerMode.set(!template.addPlayerMode.get())
  },
  'click .add-game': function (event, template) {
    template.addGameMode.set(!template.addGameMode.get())
  }
});

//This finds the teamId from the route and loads that data from the page
Template.teamPage.helpers ({
		teams: ()=> {
			var teamId = FlowRouter.getParam('teamId');
			return Teams.findOne({teamId: teamId});
	},
		players: ()=> {
			//only show players with this teamId, use for now instead of template level subs
			var teamId = FlowRouter.getParam('teamId');
			return Players.find({teamId: teamId});
	},
		games: ()=> {
			//only show games with this teamId, use for now instead of template level subs
			var teamId = FlowRouter.getParam('teamId');
			return Games.find({teamId: teamId});
},
addPlayerMode: function () {
  return Template.instance().addPlayerMode.get();
},
addGameMode: function () {
  return Template.instance().addGameMode.get();
}
});
