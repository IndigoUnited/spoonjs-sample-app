define([
    'spoon',
    'doT',
    'jquery',
    'text!./assets/tmpl/item.html',
    'css!./assets/css/articles.css'
], function (spoon, doT, $, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'ArticleListItemView',

        _element: 'tr',
        _template: doT.template(tmpl),

        // The events declaration is highly efficient
        // If one view is linked to another and so on, the root view will be handling all the subviews events with delegation
        _events: {
            'click': '_onClick',
            'mouseenter a': '_onMouseEnter',
            'mouseleave a': '_onMouseLeave'
        },

        ////////////////////////////////////////////////////////////

        /**
         * {@inheritDoc}
         */
        render: function (data) {
            this.$super(data);

            this._element.data('id', data.article.id);
        },

        /**
         * Handles the click.
         */
        _onClick: function (event, element) {
            console.log('Click tr of element #' + this._element.data('id'));
        },

        /**
         * Handles the row mouse enter.
         */
        _onMouseEnter: function (event, element) {
            console.log('Enter link of element #' + this._element.data('id'));
        },

        /**
         * Handles the row mouse leave.
         */
        _onMouseLeave: function (event, element) {
            console.log('Leave link of element #' + this._element.data('id'));
        }
    });
});