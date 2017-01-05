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

Meteor.subscribe('teams');

//Helper below replaces
/*
Template.teamsList.onCreated(function() {
		var self = this;
		self.autorun(function(){
			self.subscribe('teams');
		});
});
*/

Template.teamsList.helpers ({
  teams: () => {
    return Teams.find({});
  		}
});

//This finds the teamId from the route and loads that data from the page
Template.teamPage.helpers ({
	teams: ()=> {
		var teamId = FlowRouter.getParam('teamId');
		return Teams.findOne({teamId: teamId});
	}
		});

Template.gaffaTeam.helpers ({
	teams: () => {
		// should this be teamId here?
		var id = FlowRouter.getParam('teamId');
		return Teams.findOne({teamId: teamId});
	},
	players: () => {
    return Players.find({});
  }
});
