define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var Game = require(this.model.get('_media').src);

    var PhaserGameView = Backbone.View.extend({

        className: 'PhaserGameWrapper',

        initialize: function(options) {
            this.render();
        },

        events: {

        },

        render: function(setScore) {
            console.log("PhaserGameView");

            var data = this.model.toJSON();
            var template = Handlebars.templates['phaserGameWrapper'];
            $(this.el).html(template(data)).appendTo('.component-widget');
        }

    });

    return PhaserGameView;

});