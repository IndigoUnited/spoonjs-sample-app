define([
    'spoon',
    'doT',
    'jquery',
    'text!./assets/tmpl/details.html',
    'css!./assets/css/articles.css'
], function (spoon, doT, $, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'ArticleDetailsView',

        _element: 'div.article-details',
        _template: doT.template(tmpl),

        // The events declaration is highly efficient
        // If one view is linked to another and so on, the root view will be handling all the subviews events with delegation
        _events: {
            'click .back': '_onBackClick'     // Can also be an anonymous function
        },

        ////////////////////////////////////////////////////////////

        /**
         * Handles the back button click.
         */
        _onBackClick: function () {
            this._upcast('back');
        }
    });
});