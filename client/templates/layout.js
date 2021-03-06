// Check if Staff
Template.registerHelper('isStaff', function() {
  if(Meteor.user().profile.usertype = 'staff') {
    return true;
  }
})

//Format Date using Momentjs
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:sss a');
});

// Capitalize First Letter
Template.registerHelper('capFirst', function(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
});
