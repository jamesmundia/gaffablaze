import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';

import '../players/players.js'
import '../games/games.js'
import '../../lib/routing.js'

Meteor.subscribe('teams');
Meteor.subscribe('players');
Meteor.subscribe('games');

Template.teamsList.helpers({
	addTeamToTeams (){
		return Teams;
	},
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
		players: ()=> {
			var teamId = FlowRouter.getParam('teamId');
			return Players.find({teamId: teamId});
	},
		games: ()=> {
			return Games.find({});
	}
		});
