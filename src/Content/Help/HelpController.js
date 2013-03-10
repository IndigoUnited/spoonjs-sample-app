define([
    'spoon',
    './HelpView'
], function (spoon, HelpView) {

    'use strict';

    return spoon.Controller.extend({
        $name: 'HelpController',

        _view: null,

        ////////////////////////////////////////////////////////////

        /**
         * Constructor.
         */
        initialize: function () {
            this.$super();

            this._view = this._link(new HelpView());
            this._view.appendTo('#content');
            this._view.render();
        }
    });
});