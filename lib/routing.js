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
  action: function(params) {
    console.log(params);
  BlazeLayout.render("mainLayout", {content: "teamPage"});
  }
});

FlowRouter.route('/:teamId/addGame', {
  action: function(params) {
    console.log(params);
    BlazeLayout.render("mainLayout", {content: "addGame"});
  }
});

FlowRouter.route('/teams/:teamId/games/:gameId', {
  name: "Single Game Page",
  action: function(params, queryParams) {
  BlazeLayout.render("mainLayout", {content: "singleGame"});
  }
});
