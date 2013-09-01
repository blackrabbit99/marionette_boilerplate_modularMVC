define(['backbone', 'marionette', "App"], function(Backbone, Marionette, App) {
    var AppController = {};
    
    $.each(App.controllers, function(moduleName, moduleDefinition){
        
        $.each(moduleDefinition.actions, function(key, fn){

            if(!AppController[key]){
                AppController[key] = fn;
            }else{
                // TODO: make sexy error handling
                throw "Please check " + moduleName + "/controllers/controllers.js file to resolve issue with duplicated controller action. Route path is " + key;
            }
        });
    });

    AppController.initialize = function(){
        console.log("controllers are initialized");
    }

    return Backbone.Marionette.Controller.extend(AppController);

});