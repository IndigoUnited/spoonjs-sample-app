define([
    'spoon',
    'doT',
    'text!./assets/tmpl/menu.html',
    'css!./assets/css/menu.css'
], function (spoon, doT, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'MenuView',

        _template: doT.template(tmpl),

        /////////////////////////////////////////

        _currentSelected: null,

        /**
         * Sets the current selected menu item.
         *
         * @param {String} key The menu key
         *
         * @return {MenuView} The instance itself to allow chaining
         */
        setSelected: function (key) {
            if (this._currentSelected) {
                this._currentSelected.removeClass('active');
            }

            this._currentSelected = this._element.find('.' + key).addClass('active');
        }
    });
});