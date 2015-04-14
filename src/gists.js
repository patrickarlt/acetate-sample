var request = require('request');

module.exports = function(callback){
  request({
    method: 'GET',
    url: 'https://api.github.com/users/patrickarlt/gists',
    json: true,
    headers: {
      'User-Agent': 'request'
    }
  }, function(err, resp, body){
    callback(err, body.length);
  });
};