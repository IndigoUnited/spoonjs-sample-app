define([
    'spoon',
    './HelpView'
], function (spoon, HelpView) {

    'use strict';

    return spoon.Controller.extend({
        $name: 'HelpController',

        /**
         * Constructor.
         */
        initialize: function () {
            spoon.Controller.call(this);

            this._view = this._link(new HelpView());
            this._view.appendTo('#content');
            this._view.render();
        }
    });
});