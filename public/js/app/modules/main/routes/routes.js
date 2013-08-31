define(["App"], function(App) {
	
	App.routes = App.routes || {};
	
	var routes = {
		namespace: "main", 
		root: true,
		appRoutes: {
			"": "index"
		}
	}

	App.routes[routes.namespace] = routes;

});