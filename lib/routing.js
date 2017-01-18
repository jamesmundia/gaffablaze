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

FlowRouter.route('/teams/:teamId/players/:playerId', {
  name: "Player Page",
  action: function(params, queryParams) {
    console.log(params);
  BlazeLayout.render("mainLayout", {content: "singlePlayerPage"});
  }
});

FlowRouter.route('/teams/:teamId/games/:_id', {
  name: "Single Game Page",
  action: function(params, queryParams) {
    console.log(params);
  BlazeLayout.render("mainLayout", {content: "singleGame"});
  }
});
