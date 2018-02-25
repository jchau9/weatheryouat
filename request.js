const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/trending',
  method: 'GET',
  qs: {
    client_id: 'GTHCK3MYSF32LVUCZ3340105XQB1QVLW4YMCIC11R2NBCLBF',
    client_secret: 'YSG23S23BNYDRDJSNSRZY53JZ4HUVBLUTBNYX1PXLQSQEW0T',
    ll: '40.7243,-74.0018',
    query: 'coffee',
    v: '20170801',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});