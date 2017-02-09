import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data';
import { Sessions } from '../../imports/api/data';
import { Schemas } from '../../imports/api/data';

import '../teams/teams';
import './sessions';
import '../../imports/api/data';

Template.singleSession.onCreated(function () {
  var self = this;
    self.autorun(function () {
      var sessionId = FlowRouter.getParam('sessionId');
      var teamId = FlowRouter.getParam('teamId');
      self.subscribe('singleSession', sessionId, teamId);
    });
  this.addSessionNotesMode = new ReactiveVar(false);
});

Template.singleSession.events({
    'click .add-session-notes':  function (event, template) {
    template.addSessionNotesMode.set(!template.addSessionNotesMode.get())
  },
})

Template.singleSession.helpers({
  teams: () => {
    var teamId = FlowRouter.getParam('teamId');
    return Teams.findOne({ teamId: teamId })
  },
  sessions: () => {
    var sessionId = FlowRouter.getParam('sessionId');
    return Sessions.findOne({ sessionId: sessionId });
  },
  addSessionNotesMode() {
    return Template.instance().addSessionNotesMode.get();
  },
});

Template.sessionNotes.helpers({
  addSessionNotestoSession() {
    return Sessions;
  },
  thisSession() {
    var sessionId = FlowRouter.getParam('sessionId');
    return Sessions.findOne({ sessionId: sessionId });
  }
})
