define(["App"], function(App) {
	
	App.routes = App.routes || {};
	
	var routes = {
		namespace: "welcome", 
		root: false,
		appRoutes: {
			"test": "test"
		}
	}

	App.routes[routes.namespace] = routes;

});