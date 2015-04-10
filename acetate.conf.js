var _ = require('lodash');
var minimatch = require('minimatch');

module.exports = function (acetate) {

  // set the log level we want
  acetate.logLevel = 'debug';

  // apply metadata in bulk to pages mathcing **/*
  acetate.metadata('**/*', {
    title: 'Acetate',
    author: 'Patrick Arlt'
  });

  // add a new data (data.json) file to pages with the variable `merge`
  acetate.metadata('data.html', {
    data: {
      merge: 'data.json'
    }
  });

  // all pages matching **/* will extend the 'content' block inside _layout.html
  acetate.layout('**/*', '_layout:content');
  acetate.layout('blog/posts/**/*', 'blog/_layout:post');

  acetate.collection('posts', 'blog/posts/*', {
    sortBy: 'date',
    ascending: false
  });

  acetate.registerHelper('helper', function(foo, bar, baz){
    return 'Custom helper called with ' + foo + ' ' + bar + ' '  + baz;
  });

  acetate.registerBlock('content', function(body, foo, bar, baz){
    return 'Block helper called with ' + foo + ' ' + bar + ' '  + baz + ' \n' + body;
  });

  acetate.query('blog', function(pages){
    return _(pages).filter(function(page){
      return minimatch(page.src, 'blog/posts/**/*');
    }).sortByOrder(['date'], [false]);
  });
};