define([
    'spoon',
    './FooterView',
    'jquery'
], function (spoon, FooterView, $) {

    'use strict';

    return spoon.Controller.extend({
        $name: 'FooterController',

        _view: null,

        ////////////////////////////////////////////////////////////

        /**
         * Constructor.
         */
        initialize: function () {
            this.$super();

            this._view = this._link(new FooterView($('#footer')));
            this._view.render();
        }
    });
});