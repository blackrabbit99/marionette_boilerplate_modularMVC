define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars', 'config/params'],
    function ($, Backbone, Marionette, _, Handlebars, params) {
        var App = new Backbone.Marionette.Application();
        debugger;
        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            headerRegion:"header",
            mainRegion:"#main"
        });

        App.addInitializer(function () {
            Backbone.history.start();
        });

        return App;
    });