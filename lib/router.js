Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  // home
  this.route('home', {
    path: '/',
    template: 'mytickets'
  });
});
