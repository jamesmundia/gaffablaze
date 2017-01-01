FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("main", {content: "home"});
  }
});

FlowRouter.route('/:teamId', {
  action: function() {
    BlazeLayout.render("main", {content: "team"});
  }
});
