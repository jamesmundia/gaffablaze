import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.subscribe('players');

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';

//helper for adding teams via Schema
Template.teamsList.helpers({
	addTeamToTeams (){
		return Teams;
	}
});

//Helper below replaces [Meteor.subscribe('teams');]
Template.teamsList.onCreated(function() {
		var self = this;
		self.autorun(function(){
			self.subscribe('teams');
		});
});

Template.teamsList.helpers ({
  teams: () => {
    return Teams.find({});
  		}
});

//Break into teamPage file

Template.teamPage.onCreated(function() {
		var self = this;
		self.autorun(function(){
			var teamId = FlowRouter.getParam('teamId');
			self.subscribe('singleTeam', teamId);
		});
});

Template.gaffaTeam.helpers ({
	pathForTeam: function () {
		var team = this;
		var params = {
			teamId: this.teamId
		};
		var routeName = "pageForTeam";
		var path = FlowRouter.path(routeName, params);
		return path;
	},
	teams: () => {
		var id = FlowRouter.getParam('teamId');
		return Teams.findOne({teamId: teamId});
	},
	players: () => {
    return Players.find({});
  }
});
