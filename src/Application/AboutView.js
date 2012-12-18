define([
    'spoon',
    'doT',
    'jquery',
    'text!./assets/tmpl/about.html',
    'css!./assets/css/about.css',
    'bootstrap'
], function (spoon, doT, $, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'AboutView',

        _element: 'div.about',
        _template: doT.template(tmpl),

        _modalEl: null,

        /**
         * {@inheritDoc}
         */
        render: function () {
            this.$super();

            this._modalEl = this._element.find('.modal').modal();
            this._modalEl.on('hidden', function () {
                this._upcast('close');
            }.$bind(this));
        },

        /**
         * {@inheritDoc}
         */
        _onDestroy: function () {
            this._modalEl.off().modal('hide');

            this.$super();
        }
    });
});