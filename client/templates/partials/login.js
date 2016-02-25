// Helpers


// Events
Template.login.events({
  'click .register-link': function() {
    $('.panel-login').hide();
    $('.panel-register').fadeIn();
  },
  'click .login-link': function() {
    $('.panel-register').hide();
    $('.panel-login').fadeIn();
  },
  'submit .panel-login': function() {
    
  }
});

//Jquery frontend manipulation - Toggling
