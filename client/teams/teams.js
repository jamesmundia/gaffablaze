import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.subscribe('players');

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';

import '../players/players.js'

Meteor.subscribe('teams');

//helper for adding teams via Schema
Template.teamsList.helpers({
	addTeamToTeams (){
		return Teams;
	}
});

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
	},
	//Print players on Team Page?
	players: ()=> {
		var teamId = FlowRouter.getParam('teamId');
		return Players.find({teamId: teamId});
	}
		});

//Gets teamId for the route so that we're directed to the right team?
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
