define([
    'spoon',
    'doT',
    'text!./assets/tmpl/footer.html',
    'css!./assets/css/main.css'
], function (spoon, doT, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'FooterView',

        _template: doT.template(tmpl)
    });
});