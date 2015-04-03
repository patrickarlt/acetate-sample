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
};