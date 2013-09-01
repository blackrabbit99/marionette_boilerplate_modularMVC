define(['App', 'backbone', 'marionette'], function (App, Backbone, Marionette) {
	App.controllers = App.controllers || {};
	
	var controllers = {
		namespace: "main", 
		root: true,
		actions: {
			index:function () {
				alert(123);
			}
		}
	}

	App.controllers[controllers.namespace] = controllers;
	
});