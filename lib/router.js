Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  // home
  this.route('home', {
    path: '/',
    template: 'mytickets',
    data: function() {
      templateData = {
        tickets: Tickets.find({customer: Meteor.userId()})
      };
      return templateData;
    }
  });
});
