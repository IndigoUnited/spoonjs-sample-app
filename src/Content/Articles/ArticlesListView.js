define([
    'spoon',
    'doT',
    './ArticleListItemView',
    'text!./assets/tmpl/list.html',
    'css!./assets/css/articles.css'
], function (spoon, doT, ArticleListItemView, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'ArticlesListView',

        _element: 'div.articles-list',
        _template: doT.template(tmpl),

        _events: {
            'mouseenter': '_onMouseEnter',
            'mouseleave': '_onMouseLeave'
        },

        /**
         * {@inheritDoc}
         */
        render: function (data) {
            // Call super, since we are overriding the render
            this.$super(data);

            var x,
                length = data.articles.length,
                item,
                table = this._element.find('table');

            // For each article, render the view for it
            for (x = 0; x < length; x += 1) {
                item = this._link(new ArticleListItemView());
                item.render({ article: data.articles[x] });
                item.appendTo(table);
            }

            return this;
        },

        /**
         * Handles the mouse enter.
         */
        _onMouseEnter: function () {
            console.log('Enter list view');
        },

        /**
         * Handles the mouse leave.
         */
        _onMouseLeave: function () {
            console.log('Leave list view');
        }
    });
});