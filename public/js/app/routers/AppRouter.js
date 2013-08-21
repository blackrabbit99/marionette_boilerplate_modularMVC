define(['backbone', 'marionette'], function(Backbone, Marionette) {
   return Backbone.Marionette.AppRouter.extend({
   		// TODO generate controllers
       //"index" must be a method in AppRouter's controller
       appRoutes: {
           "": "index"
       }
   });
});