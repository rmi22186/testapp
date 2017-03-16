var express = require('express');
var app = express();
var http = require("http");
var username = 'e001b2b2eb5da649a42c633563135de1';
var password = 'Kfjqo310EvDZxAZYAeMB6V5_ldXTOWKGBNkwLL-QgG-MOWha5Zw7Ss5G71WbNQDl';
var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

var options = {
    method:"POST",
    host: 'https://api.mparticle.com/',
    // path: 'oauth2/token',
    headers:{
        "Authorization": auth,
    }
};

app.use(express.static(__dirname));
module.exports = app;
var server = app.listen(8080, function() {
  console.log('express server listening on port ' + server.address().port);

});

// var request = http.request(options, function (response, err) {
//     console.log('err', err);
//     console.log('STATUS: ' + response.statusCode);
//     console.log('HEADERS: ' + JSON.stringify(response.headers));
//     response.setEncoding('utf8');
//     response.on('data', function (chunk) {
//         console.log('BODY: ' + chunk);
//     });
// });
// request.end();


setInterval(function() {
    http.get("http://cherrystreet.herokuapp.com");
}, 300000);
