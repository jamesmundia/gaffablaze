import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';
import { Games } from '../../imports/api/data.js';

import './teampage';
import '../players/players'
import '../games/games'
import '../../lib/routing'

// Template Level Subscription for Teams
Template.teamsList.onCreated(function () {
  const self = this;
  self.autorun(function () {
    self.subscribe('teams');
  });
  this.addTeamMode = new ReactiveVar(false);
});

Template.teamsList.events({
  'click .add-team': function (event, template) {
    template.addTeamMode.set(!template.addTeamMode.get())
  }
});

Template.teamsList.helpers({
  addTeamToTeams () {
    return Teams;
  },
  teams: () => {
    return Teams.find({});
  },
  addTeamMode: function () {
    return Template.instance().addTeamMode.get();
  }
});
