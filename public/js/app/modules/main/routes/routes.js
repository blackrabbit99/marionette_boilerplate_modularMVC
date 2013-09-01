define(["App"], function(App) {
	
	App.routes = App.routes || {};
	
	var routes = {
		namespace: "main", 
		root: true,
		appRoutes: {
			"": "index",
			"superTest": "superTest"
		}
	}

	App.routes[routes.namespace] = routes;

});