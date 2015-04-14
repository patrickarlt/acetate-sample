var _ = require('lodash');

module.exports = function (acetate) {

  // apply metadata in bulk to pages mathcing **/*
  acetate.metadata('**/*', {
    title: 'Acetate',
    author: 'Patrick Arlt'
  });

  acetate.data('global', 'global.json');

  // all pages matching **/* will extend the 'content' block inside _layout.html
  acetate.layout('**/*', '_layout:content');
  acetate.layout('blog/posts/**/*', 'blog/_layout:post');

  acetate.helper('helper', function(foo, bar, baz){
    return 'Custom helper called with ' + foo + ' ' + bar + ' '  + baz;
  });

  acetate.block('content', function(body, foo, bar, baz){
    return 'Block helper called with ' + foo + ' ' + bar + ' '  + baz + ' \n' + body;
  });

  acetate.global('log', function(value){
    console.log(value);
  });

  acetate.query('blog', 'blog/posts/*.md', function(pages){
    return _.sortByOrder(pages, ['date'], [false]);
  });
};