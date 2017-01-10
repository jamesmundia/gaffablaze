import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.subscribe('teams');
Meteor.subscribe('players');

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';

Meteor.subscribe('teams');
Meteor.subscribe('games');

Template.addGame.helpers({
  games: ()=> {
    return Games;
  }
});

Template.teamPage.helpers({
	addGametoGames (){
		return Games;
	}
});
