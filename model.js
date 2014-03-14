var mongoose = require('mongoose')
    , moment = require('moment')
mongoose.connect('mongodb://jeanepaul:jinpol@oceanic.mongohq.com:10010/access_tokens_fb');

var AccessToken = mongoose.model('AccessToken', { 
                                                  access_token: String
                                                  , expires: String
                                                  , token_length: Number
                                                  , created_at: Date
                                                })

module.exports = {
  // Model new Call
  AccessToken: AccessToken,  
  
  // return one latest record
  findOne: function(callback) {
    AccessToken.find({}, {}, {sort:{_id:-1}, limit:1}, function(err, resp) {
      callback(null, resp[0])
    })
  }

}