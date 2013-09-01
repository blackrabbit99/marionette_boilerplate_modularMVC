define(['App', 'backbone', 'marionette', 'modules/main/views/WelcomeView', 'modules/main/views/DesktopHeaderView'], 
	function (App, Backbone, Marionette, WelcomeView, DesktopHeaderView) {
		App.controllers = App.controllers || {};
		
		var controllers = {
			namespace: "main", 
			root: true,
			actions: {
				initialize: function(){
					App.headerRegion.show(new DesktopHeaderView());
				},
				index: function() {
					App.mainRegion.show(new WelcomeView());
				},
				superTest: function(){
					alert("super test");
				}
			}
		}

		App.controllers[controllers.namespace] = controllers;
	
});