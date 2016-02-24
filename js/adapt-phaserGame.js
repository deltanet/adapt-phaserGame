define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var phaser = require('components/adapt-phaserGame/js/libs/phaser');
    var Game = require('course/en/phaser/test/Game');
    //var Game = require(this.model.get('_media').src);

    var PhaserGame = ComponentView.extend({

        preRender: function() {
            this.listenTo(Adapt, "audio:changeText", this.replaceText);
        },

        postRender: function() {
            this.setReadyStatus();

            if (this.model.get('_reducedText') && this.model.get('_reducedText')._isEnabled) {
                this.replaceText(Adapt.audio.textSize);
            }

            var source = this.model.get('_media').src;

            this.initGame();
            
        },
        
        replaceText: function(value) {
            // If enabled
            if (this.model.get('_reducedText') && this.model.get('_reducedText')._isEnabled) {
                if(value == 0) {
                    this.$('.component-title-inner').html(this.model.get('displayTitle')).a11y_text();
                    this.$('.component-body-inner').html(this.model.get('body')).a11y_text();
                } else {
                    this.$('.component-title-inner').html(this.model.get('displayTitleReduced')).a11y_text();
                    this.$('.component-body-inner').html(this.model.get('bodyReduced')).a11y_text();
                }
            }
        },

        initGame: function() {

            var game = new Phaser.Game(960, 540, Phaser.AUTO, this.model.get('_media').id, { preload: preload, create: create, update: update });

        }

    });

    Adapt.register('phaserGame', PhaserGame);

    return PhaserGame;

});