Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  // home
  this.route('mytickets', {
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
