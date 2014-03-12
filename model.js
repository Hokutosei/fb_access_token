var mongoose = require('mongoose');
mongoose.connect('mongodb://jeanepaul:jinpol@oceanic.mongohq.com:10010/access_tokens_fb');

var Cat = mongoose.model('Cat', { name: String });
var AccessToken = mongoose.model('AccessToken', { 
                                                  access_token: String
                                                  , expires: String
                                                  , created_at: { type: Date, default: Date.now } 
                                                })

//module.exports.AccessToken = AccessToken;

module.exports = {
  AccessToken: AccessToken,
  
  findOne: function(callback) {
    console.log('called')
    AccessToken.find({}, {}, {sort:{_id:-1}, limit:1}, function(err, resp) {
      callback(null, resp[0])
    })
  }

}