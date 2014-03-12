var request = require('./request.js')
    , log = function(str) { console.log(str) }
    , conf = require('./conf')


/*
request.postRequest({a: 'test'}, 'http://google.com', function(err, body, statuscode) {
  if(err) throw err;
  log(statuscode)

})
*/

request.extendAccessToken(conf.postData, function(err, facebookRes) {
  log(facebookRes)
})