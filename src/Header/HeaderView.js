define([
    'spoon',
    'doT',
    'text!./assets/tmpl/header.html',
    'css!./assets/css/main.css'
], function (spoon, doT, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'HeaderView',

        _template: doT.template(tmpl)
    });
});