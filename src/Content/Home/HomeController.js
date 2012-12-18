define([
    'spoon',
    './HomeView'
], function (spoon, HomeView) {

    'use strict';

    return spoon.Controller.extend({
        $name: 'HomeController',

        _view: null,

        ////////////////////////////////////////////////////////////

        /**
         * Constructor.
         */
        initialize: function () {
            this.$super();

            this._view = this._link(new HomeView());
            this._view.appendTo('#content');
            this._view.render();
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