import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';

import '../players/players.js'
import '../games/games.js'

Meteor.subscribe('teams');
Meteor.subscribe('players');
Meteor.subscribe('games');

Template.teamsList.helpers({
	addTeamToTeams (){
		return Teams;
	}
});

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
	},
	games: ()=> {
		return Games.find({});
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
