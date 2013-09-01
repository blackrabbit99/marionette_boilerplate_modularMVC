define(['backbone', 'marionette', "App"], function(Backbone, Marionette, App) {
	var AppRoutes = {};
	
	$.each(App.routes, function(moduleName, moduleDefinition){
		
		var namespace = (moduleDefinition.root) ? "" : moduleDefinition.namespace + "/";
		
		$.each(moduleDefinition.appRoutes, function(routePath, routeHandler){
			var fullRoute = namespace + routePath;

			if(!AppRoutes[fullRoute]){
				AppRoutes[fullRoute] = routeHandler;
			}else{
				// TODO: make sexy error handling
				throw "Please check " + moduleName + "/routes/routes.js file to resolve issue with duplicated route name. Route path is " + routePath;
			}
		});
	});

	console.log(AppRoutes);

	return Backbone.Marionette.AppRouter.extend({
			// TODO generate controllers
		//"index" must be a method in AppRouter's controller
		appRoutes: AppRoutes
	});
});