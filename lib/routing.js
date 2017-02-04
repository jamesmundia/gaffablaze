FlowRouter.triggers.enter([function(context, redirect) {
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action () {
    if (Meteor.userId()) {
      FlowRouter.go('teams')
    }
    BlazeLayout.render("mainLayout", {content: "gaffaHome"});
  }
});

FlowRouter.route('/teams', {
  name: 'teams',
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

FlowRouter.route('/teams/:teamId/sessions/:sessionId', {
  name: 'Single Session Page',
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', { content: 'singleSession' });
  },
})
