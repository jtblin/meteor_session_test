if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to session_test.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("Hello, " + Session.get('placeholder'));
    }
  });

	Meteor.startup(function () {
		var vars = [];
    Meteor.call('connect_to_api', vars, function (err, data){
			Session.set('placeholder', data);
		});
  });
	

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

	Meteor.methods({
		connect_to_api: function(vars) {
			// get data from remote API
			return "World";
		}
	});
}
