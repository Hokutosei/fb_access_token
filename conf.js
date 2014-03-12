/*
var postData = {
  'access_token': 'CAAEgAJT96bwBAByp282he5pa0m7Qxy5ySZBCEZC7aeCwCqGPGOM8afOLwDx0ka1ZCErd0KhA9OZADRdPTHHY4KLKT5SAh6HZAKZBdGZATczt7r729k249iqpcVuqJgeg4pKUHcuyFzwZAqU390ytdqTewmZCoxAP2UOskqtbmaMsYInAQhZCikw3zxohvEnI7L5n5flYpHdsZBGnAZDZD'
  , 'client_id': '316661848467900'
  , 'client_secret' : '1ac6a50ef0d6c6f6ba14b2079f2e3672'
}
*/

function postData(last_token)  {
  return {
        'access_token': last_token
        , 'client_id': ''
        , 'client_secret' : ''  
  }
}

module.exports.postData = postData;