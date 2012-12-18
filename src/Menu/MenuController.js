define([
    'spoon',
    './MenuView',
    'jquery'
], function (spoon, MenuView, $) {

    'use strict';

    return spoon.Controller.extend({
        $name: 'MenuController',

        _view: null,

        ////////////////////////////////////////////////////////////

        /**
         * Constructor.
         */
        initialize: function () {
            this.$super();

            this._view = this._link(new MenuView($('#menu')));
            this._view.render();

            // Listen to the broadcast event in order select the menu item accordingly
            this.on('app.content_change', this.setSelected);
        },

        /**
         * Sets the current selected menu item.
         *
         * @param {String} key The menu key
         *
         * @return {MenuController} The instance itself to allow chaining
         */
        setSelected: function (key) {
            this._view.setSelected(key);

            return this;
        },

        /**
         * {@inheritDoc}
         */
        _onDestroy: function () {
            if (this._view) {
                this._view.destroy();
                this._view = null;
            }

            this.$super();
        }
    });
});