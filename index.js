var request = require('./request.js')
    , log = function(str) { console.log(str) }
    , conf = require('./conf')
    , counter = 0
    , model = require('./model')
    , async = require('async')

function main() {
  var last_token = '';
  async.series({
    findOne: function(callback) {
        var start_find = new Date()
        model.findOne(function(err, resp) {
          if(err) throw err;
          //log(resp)
          last_token = resp.access_token
          callback(null, (new Date() - start_find) + ' ms')
        })
      },
    requestToken: function(callback) {
        request.extendAccessToken(conf.postData(last_token), function(err, facebookRes) {
          var access_token = new model.AccessToken(facebookRes);
          var start_save = new Date()
          access_token.save(function(err, resp) {
            //log(facebookRes)
            log(resp)
            callback(null, (new Date() - start_save) + ' ms')
          })
        })      
      }
  }, function(err, result) {
      log(result)
      log('----------------------------------------------- ' + counter)
      counter++;
      setTimeout(main, 30000)    
    })
}

main()