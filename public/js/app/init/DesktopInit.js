// Include Desktop Specific JavaScript files here (or inside of your Desktop Controller, or differentiate based off App.mobile === false)
require(["App", "routes", "jquery", "backbone", "marionette", "bootstrap", "backbone.validateAll"],
    function (App, AppRouter, AppController) {
    	debugger;
        App.appRouter = new AppRouter({
            controller:new AppController()
        });
        // Start Marionette Application in desktop mode (default)
        App.start();

    });