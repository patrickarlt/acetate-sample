var request = require('request');

module.exports = function(callback, page){
  request({
    method: 'GET',
    url: 'https://api.github.com/users/' + page.username + '/gists',
    json: true,
    headers: {
      'User-Agent': 'request'
    }
  }, function(err, resp, body){
    callback(err, body);
  });
};