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
            spoon.Controller.call(this);

            this._view = this._link(new HomeView());
            this._view.appendTo('#content');
            this._view.render();
        }
    });
});