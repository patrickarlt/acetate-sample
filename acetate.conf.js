module.exports = function (acetate) {

  // apply metadata in bulk to pages mathcing **/*
  acetate.metadata('**/*', {
    title: 'Acetate',
    author: 'Patrick Arlt'
  });

  // all pages matching **/* will extend the 'content' block inside _layout.html
  acetate.layout('**/*', '_layout:content');

};