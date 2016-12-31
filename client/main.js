import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/startup/accounts_config.js';

import '../imports/ui/body.js';

import { Teams } from '../imports/api/collections.js';
import { Players } from '../imports/api/collections.js';

import { Schemas } from '../imports/api/collections.js';

Template.addPlayerForm.helpers({
	addPlayerToPlayers () {
		return Players;
	}
});

Template.player.events({
	'click.increment, click.decrement' : function () {
		var playerId = this._id;
		Session.set('selectedPlayer', playerId);

	}, //DONT FORGET YOUR COMMAS
	'click .increment': function(){
		var selectedPlayer = Session.get('selectedPlayer');
		Players.update({ _id: selectedPlayer }, { $inc: { gamerating: 1 } } );
},
'click .decrement': function(){
	var selectedPlayer = Session.get('selectedPlayer');
	Players.update({ _id: selectedPlayer }, { $inc: { gamerating: -1 } } );
	}
});

Template.player.helpers({
	'selectedClass': function(){
		var playerId = this._id;
		var selectedPlayer = Session.get('selectedPlayer');
		if(playerId == selectedPlayer){
      return "selected"
    	}
		},
		'selectedPlayer': function(){
			var selectedPlayer = Session.get('selectedPlayer');
			return Players.findOne({ _id: selectedPlayer });
		}
});
