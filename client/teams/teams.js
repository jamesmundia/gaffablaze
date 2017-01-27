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
  },
  yearOptions: function () {
    return [
      { label: "1996", value: 1996 },
      { label: "1997", value: 1997 },
      { label: "1998", value: 1998 },
      { label: "1999", value: 1999 },
      { label: "2000", value: 2000 },
      { label: "2001", value: 2001 },
      { label: "2002", value: 2002 },
      { label: "2003", value: 2003 },
      { label: "2004", value: 2004 },
      { label: "2005", value: 2005 },
      { label: "2006", value: 2006 },
      { label: "2007", value: 2007 },
      { label: "2008", value: 2008 },
      { label: "2009", value: 2009 },
      { label: "2010", value: 2010 },
      { label: "2011", value: 2011 },
    ];
  },
});
