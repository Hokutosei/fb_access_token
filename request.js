var request = require('request')
  , querystring = require('querystring')
  , log = function(str) { console.log(str) }
  , graph = require('fbgraph')
/*
require('request').post({
    uri:"http://example.com/test",
    headers:{'content-type': 'application/x-www-form-urlencoded'},
    body:require('querystring').stringify(postData)
    },function(err,res,body){
        console.log(body);
        console.log(res.statusCode);
});
*/

function postRequest(data, url, callback) {
  log(url)
  request.post({
    uri: url,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: querystring.stringify(data)
  }, function(err, res, body) {
      if(err) throw err;
      callback(null, body, res.statusCode)
      //log(body)
      //log(res.statusCode);
  })
}
module.exports.postRequest = postRequest;

module.exports.extendAccessToken = function(postData, callback) {
  graph.extendAccessToken(postData, function(err, facebookRes) {
    if(err) throw err;
    callback(null, facebookRes);
  })
}