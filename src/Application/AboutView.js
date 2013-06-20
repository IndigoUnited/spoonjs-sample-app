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

        /**
         * {@inheritDoc}
         */
        render: function () {
            spoon.View.prototype.render.call(this);

            this._modalEl = this._element.find('.modal').modal();
            this._modalEl.on('hidden', function () {
                this._upcast('close');
            }.bind(this));
        },

        /**
         * {@inheritDoc}
         */
        _onDestroy: function () {
            this._modalEl.off().modal('hide');

            spoon.View.prototype._onDestroy.call(this);
        }
    });
});