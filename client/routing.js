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
  // print params in Console
  action: function(params, queryParams) {
    // console.log("Params:", params);
    // console.log("Query Params:", queryParams);
  BlazeLayout.render("mainLayout", {content: "teamPage"});
  }
});

FlowRouter.route('/teams/:teamId/games/gameId', {
  // print params in Console
  action: function(params, queryParams) {
    // console.log("Params:", params);
    // console.log("Query Params:", queryParams);
  BlazeLayout.render("mainLayout", {content: "singleGame"});
  }
});
