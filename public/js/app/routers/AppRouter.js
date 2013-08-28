define(['backbone', 'marionette'], function(Backbone, Marionette) {
	debugger;
	return Backbone.Marionette.AppRouter.extend({
			// TODO generate controllers
	   //"index" must be a method in AppRouter's controller
	   appRoutes: {
	       "": "index"
	   }
	});
});