import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.subscribe('teams');
Meteor.subscribe('players');

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';

Meteor.subscribe('teams');
Meteor.subscribe('games');

Template.addGame.helpers({
  addGametoGames () {
    return Games;
  }
});

Template.teamPage.helpers({
	addGametoGames (){
		return Games;
	}
});

Template.game.helpers({
  games: () => {
    return Games.find({});
  },
  teams: () => {
		// should this be teamId here?
		var teamId = FlowRouter.getParam('teamId');
		return Teams.findOne({teamId: teamId});
  }
});

Template.addGame.helpers ({
	teams: () => {
		var teamId = FlowRouter.getParam('teamId');
		return Teams.findOne({teamId: teamId});
  }
});
