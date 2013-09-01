// Project module definition
(function(global, undefined){
    var options = {
        path: "modules/",
        routes: "/routes/routes",
        controllers: "/controllers/controllers"
    };

    var availableModules = [
        {
            path: "main",
            enable: true
        },
        {
            path: "welcome",
            enable: true
        }
    ];

    var params = {
        getModules: function(){
            return availableModules;
        },
        getRoutesPath: function(){
            var routesPath = [];
            for(var i = 0; i < availableModules.length; i++){
                routesPath.push(options.path + availableModules[i].path + options.routes);
            }

            return routesPath;
        },
        getControllerPath: function(){
            var controllerPath = [];
            for(var i = 0; i < availableModules.length; i++){
                controllerPath.push(options.path + availableModules[i].path + options.controllers);
            }

            return controllerPath;  
        }
    };

    require.config({
        baseUrl:"./js/app",
        // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
        // probably a good idea to keep version numbers in the file names for updates checking
        paths:{
            // core handlers
            "routes": "./routers/AppRouter",
            "controllers": "./controllers/AppController",

            // Core Libraries
            "jquery":"../libs/jquery",
            "underscore":"../libs/lodash",
            "backbone":"../libs/backbone",
            "marionette":"../libs/backbone.marionette",
            "handlebars":"../libs/handlebars",
            "hbs":"../libs/hbs",
            "i18nprecompile":"../libs/i18nprecompile",
            "json2":"../libs/json2",
            "jasmine": "../libs/jasmine",
            "jasmine-html": "../libs/jasmine-html",

            // Plugins
            "backbone.validateAll":"../libs/plugins/Backbone.validateAll",
            "bootstrap":"../libs/plugins/bootstrap",
            "text":"../libs/plugins/text",
            "jasminejquery": "../libs/plugins/jasmine-jquery"
        },
        // Sets the configuration for your third party scripts that are not AMD compatible
        shim:{

            "routes": {
                "deps": params.getRoutesPath()
            },

            "controllers": {
                "deps": params.getControllerPath()
            },

            // Twitter Bootstrap jQuery plugins
            "bootstrap":["jquery"],
            // jQueryUI

            // Backbone
            "backbone":{
                // Depends on underscore/lodash and jQuery
                "deps":["underscore", "jquery"],
                // Exports the global window.Backbone object
                "exports":"Backbone"
            },
            //Marionette
            "marionette":{
                "deps":["underscore", "backbone", "jquery"],
                "exports":"Marionette"
            },
            //Handlebars
            "handlebars":{
                "exports":"Handlebars"
            },
            // Backbone.validateAll plugin that depends on Backbone
            "backbone.validateAll":["backbone"],

            "jasmine": {
                // Exports the global 'window.jasmine' object
                "exports": "jasmine"
            },

            "jasmine-html": {
                "deps": ["jasmine"],
                "exports": "jasmine"
            }
        },
        // hbs config - must duplicate in Gruntfile.js Require build
        hbs: {
            templateExtension: "html",
            helperDirectory: "templates/helpers/",
            i18nDirectory: "templates/i18n/",

            compileOptions: {}        // options object which is passed to Handlebars compiler
        }
    });
})(this);

// Require scripting

