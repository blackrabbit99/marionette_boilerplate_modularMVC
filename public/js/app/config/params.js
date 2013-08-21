(function(global, undefined){
	var options = {
		routes: "/routes/routes",
		controllers: "/controller/controller"
	};

	var availableModules = [
		{
			path: "main",
			enable: true
		}
	];

	if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
	    define(function() {
	    	return {
				getModules: function(){
					return availableModules;
				},
				getRoutesPath: function(){
					var routesPath = [];
					for(var i = 0; i < availableModules.length; i++){
						routesPath.push(availableModules[i].path + options.routes);
					}

					return routesPath;
				},
				getControllerPath: function(){
					var controllerPath = [];
					for(var i = 0; i < availableModules.length; i++){
						controllerPath.push(availableModules[i].path + options.controllers);
					}

					return controllerPath;	
				}
			};
	    });
	}
})(this);