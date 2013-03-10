define([
    'spoon',
    './HeaderView',
    'jquery'
], function (spoon, HeaderView, $) {

    'use strict';

    return spoon.Controller.extend({
        $name: 'HeaderController',

        _view: null,

        ////////////////////////////////////////////////////////////

        /**
         * Constructor.
         */
        initialize: function () {
            this.$super();

            this._view = this._link(new HeaderView($('#header')));
            this._view.render();
        }
    });
});