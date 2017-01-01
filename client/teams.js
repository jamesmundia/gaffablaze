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

//Break into teamPage file

Template.teamPage.onCreated(function() {
		var self = this;
		self.autorun(function(){
			self.subscribe('teams');
		});
});

Template.teamPage.helpers ({
	teams: () => {
		var id = FlowRouter.getParam('id');
		return Teams.findOne({_id: id});
	}
})
