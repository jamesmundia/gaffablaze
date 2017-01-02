import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';

import '../teams/teams.js'

// delete if onCreated works
Meteor.subscribe('players');

/*//Helper below replaces [Meteor.subscribe('teams');]
Template.teamPage.onCreated(function() {
		var self = this;
		self.autorun(function(){
			self.subscribe('players');
		});
});*/

Template.addPlayer.helpers ({
  addPlayerToPlayers () {
    return Players;
  }
});

Template.teamPage.helpers ({
  players: () => {
    return Players.find({});
  }
});
