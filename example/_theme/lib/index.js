'use strict';

var path = require('path');

module.exports = {
  lazyLoad: true,
  pick: {
    posts: function posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: markdownData.description
      };
    }
  },
  plugins: [
    'bisheng-plugin-mermaid',
  ],
  routes: [{
    path: '/',
    component: './template/Archive'
  }, {
    path: '/posts/:post',
    dataPath: '/:post',
    component: './template/Post'
  }, {
    path: '/tags',
    component: './template/TagCloud'
  }]
};
