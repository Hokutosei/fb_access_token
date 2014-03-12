var request = require('./request.js')
    , log = function(str) { console.log(str) }
    , conf = require('./conf')
    , counter = 0
    , model = require('./model')

function main() {
  request.extendAccessToken(conf.postData, function(err, facebookRes) {
    var access_token = new model.AccessToken(facebookRes);
    access_token.save(function(err, resp) {
      log(facebookRes)
      log('----------------------------------------------- ' + counter)
      counter++;
      setTimeout(main, 30000)    
    })
    
  })
}

main()