import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/startup/accounts_config.js';

import '../imports/ui/body.js';

import { Players } from '../imports/api/players.js';

import { Schemas } from '../imports/api/players.js';

Template.addPlayerForm.helpers({
	addPlayerToPlayers () {
		return Players;
	}
});

Template.player.events({
	'click .rating' : function () {
		var ratingId = this.Players.gamerating;
		Session.set('selectedRating', 'ratingId');
		console.log(ratingId);
	}
});
