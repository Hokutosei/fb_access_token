var request = require('./request.js')
    , log = function(str) { console.log(str) }
    , conf = require('./conf')
    , counter = 0;

function main() {
  request.extendAccessToken(conf.postData, function(err, facebookRes) {
    log(facebookRes)
    log('----------------------------------------------- ' + counter)
    counter++;
    setTimeout(main, 30000)
  })
}

main()