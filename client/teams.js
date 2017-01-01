import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.subscribe('players');

import { Teams } from '../imports/api/players.js';
import { Players } from '../imports/api/players.js';
import { Schemas } from '../imports/api/players.js';

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

Template.teamPage.helpers ({
	teams: () => {
		return Teams.find({});
	}
})
