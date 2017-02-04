import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';
import { Sessions } from '../../imports/api/data.js';

import '../players/players.js';
import '../games/games.js';
import '../../lib/routing.js';
import '../sessions/sessions.js';

Template.teamPage.onCreated(function () {
  var self = this;
	self.autorun(function () {
		var teamId = FlowRouter.getParam('teamId');
		self.subscribe('singleTeam', teamId);
    self.subscribe('gameList', teamId);
    self.subscribe('sessions')
	})
  this.addPlayerMode = new ReactiveVar(false);
  this.addGameMode = new ReactiveVar(false);
  this.addSessionMode = new ReactiveVar(false);
});

Template.teamPage.events({
  'click .add-player': function (event, template) {
    template.addPlayerMode.set(!template.addPlayerMode.get())
  },
  'click .add-game': function (event, template) {
    template.addGameMode.set(!template.addGameMode.get())
  },
  'click .add-session': function (event, template) {
    template.addSessionMode.set(!template.addSessionMode.get())
  }
});

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
  sessions: () => {
    return Sessions.find();
  },
  addPlayerMode() {
  return Template.instance().addPlayerMode.get();
},
addGameMode: function () {
  return Template.instance().addGameMode.get();
},
  addSessionMode() {
  return Template.instance().addSessionMode.get();
},
});
