define([
    'spoon',
    'doT',
    'jquery',
    'text!./assets/tmpl/help.html',
    'css!./assets/css/help.css'
], function (spoon, doT, $, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'HelpView',

        _element: 'div.help',
        _template: doT.template(tmpl)
    });
});