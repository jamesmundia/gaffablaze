import './teams/teams.js'

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "gaffaHome"});
  }
});

FlowRouter.route('/teams', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "teamsList"});
  }
});

FlowRouter.route('/teams/:teamId', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "teamPage"});
  }
});
