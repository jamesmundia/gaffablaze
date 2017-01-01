FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "gaffaHome"});
  }
});

FlowRouter.route('/teams', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "gaffaTeams"});
  }
});

FlowRouter.route('/:teamId', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "gaffaTeam"});
  }
});
