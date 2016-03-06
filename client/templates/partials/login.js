// Helpers
Template.login.helpers({
  userEmail: function() {
    return Meteor.user().emails[0].address;
  }
});

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
  'submit .register-form': function(event) {
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password2.value;

    if(
      isNotEmpty(email) &&
      isNotEmpty(password) &&
      isEmail(email) &&
      areValidPasswords(password, password2)) {
        // Create New User
        Accounts.createUser({
          email: email,
          password: password,
          profile: {
            usertype: 'staff'
          }
        }, function(err) {
          if (err) {
            FlashMessages.sendError("There was an error with registration");
          } else {
            FlashMessages.sendSuccess("Account Created! You are now logged in");
            Router.go('/');
          }
        });
    }
    return false;
  },
  'submit .login-form': function(event) {
    // Get Form Values
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function(err) {
      if(err) {
        event.target.email.value = email;
        event.target.password.value = password;
        FlashMessages.sendError(err.reason);
      } else {
        FlashMessages.sendSuccess('You are now logged in');
        Router.go('/');
      }
    });

    return false;
  },
  'submit .logout-form': function(event) {
    Meteor.logout(function (err) {
      if(err) {
        FlashMessages.sendError(err.reason);
      } else {
        FlashMessages.sendSuccess('You are now logged out');
        Router.go('/');
      }
    });
  }
});

// Validation
// Trim Helper
var trimInput = function(val){
  return val.replace(/^\s*|\s*$/g, "");
}

// Check For Empty Fields
isNotEmpty = function(value) {
  if(value && value !== ''){
    return true;
  }
  FlashMessages.sendError("Please fill in all fields");
  return false;
};

// Validate Email
isEmail = function(value) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(value)) {
    return true;
  }
  FlashMessages.sendError("Please use a valid email address");
  return false;
};

//Check Password length
isValidPassword = function(password) {
  if (password.length < 6) {
    FlashMessages.sendError("Password must be at least 6 characters");
    return false;
  }
  return true;
};

//Are Valid Password
areValidPasswords = function(password, confirm) {
  if(!isValidPassword(password)) {
    return false;
  }
  if (password !== confirm) {
    FlashMessages.sendError("Passwords do not match");
    return false;
  }
  return true;
};

//Jquery frontend manipulation - Toggling
