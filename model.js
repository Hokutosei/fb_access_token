var mongoose = require('mongoose');
mongoose.connect('mongodb://jeanepaul:jinpol@oceanic.mongohq.com:10010/access_tokens_fb');

var Cat = mongoose.model('Cat', { name: String });
var AccessToken = mongoose.model('AccessToken', { 
                                                  access_token: String
                                                  , expires: String
                                                  , created_at: { type: Date, default: Date.now } 
                                                })

module.exports.AccessToken = AccessToken;