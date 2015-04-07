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

  acetate.collection('posts', 'blog/posts/*.md', {
    sortBy: 'date',
    ascending: false
  });

  // `context` is an object of all the local variables in the template
  acetate.registerHelper('helper', function(context, foo, bar, baz){
    return 'Custom helper called with ' + foo + ' ' + bar + ' '  + baz;
  });
  
  // `context` is an object of all the local variables in the template
  // `body` is the content that was passed in the block
  acetate.registerBlock('content', function(context, body, foo, bar, baz){
    return 'Block helper called with ' + foo + ' ' + bar + ' '  + baz + ' \n' + body;
  });
};
