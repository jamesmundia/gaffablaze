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

FlowRouter.route('/teams/:_id', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "teamPage"});
  }
});
