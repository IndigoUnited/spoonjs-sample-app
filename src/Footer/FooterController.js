define([
    'spoon',
    './FooterView',
    'jquery'
], function (spoon, FooterView, $) {

    'use strict';

    return spoon.Controller.extend({
        $name: 'FooterController',

        /**
         * Constructor.
         */
        initialize: function () {
            spoon.Controller.call(this);

            this._view = this._link(new FooterView($('#footer')));
            this._view.render();
        }
    });
});