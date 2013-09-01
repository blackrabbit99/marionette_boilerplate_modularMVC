define(['App', 'backbone', 'marionette'], function (App, Backbone, Marionette) {
    App.controllers = App.controllers || {};
    
    var controllers = {
        namespace: "welcome", 
        root: true,
        actions: {
            test:function () {
                alert(123);
            }
        }
    }

    App.controllers[controllers.namespace] = controllers;
    
});