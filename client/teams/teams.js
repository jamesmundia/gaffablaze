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
			var id = FlowRouter.getParam('id');
			self.subscribe('singleTeam', id);
		});
});

Template.teamPage.helpers ({
	teams: () => {
		var id = FlowRouter.getParam('id');
		return Teams.findOne({_id: id});
	},
	players: () => {
    return Players.find({});
  }
});
