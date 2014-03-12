var request = require('./request.js')
    , log = function(str) { console.log(str) }

request.postRequest({a: 'test'}, 'http://google.com', function(err, body, statuscode) {
  if(err) throw err;
  log(statuscode)

})