define([
    'spoon',
    './HeaderView',
    'jquery'
], function (spoon, HeaderView, $) {

    'use strict';

    return spoon.Controller.extend({
        $name: 'HeaderController',

        /**
         * Constructor.
         */
        initialize: function () {
            spoon.Controller.call(this);

            this._view = this._link(new HeaderView($('#header')));
            this._view.render();
        }
    });
});