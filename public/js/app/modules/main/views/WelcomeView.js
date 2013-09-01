define( ['App', 'backbone', 'marionette', 'jquery', 'modules/main/models/Model', 'hbs!modules/main/templates/welcome'],
    function(App, Backbone, Marionette, $, Model, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend( {
            template: template,
            // View Event Handlers
            events: {

            }
        });
    });