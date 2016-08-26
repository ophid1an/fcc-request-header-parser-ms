var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function (request, response) {
  if (request.method === 'GET') {
    var headers = request.headers;

    /*var keys = Object.keys(headers);
    keys.forEach(function(key) {
      console.log(key + ': ' + '('+typeof headers[key]+') ' + headers[key]);
    });*/

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})

    var responseBody = {
      ipaddress: headers['host'],
      language: headers['accept-language'],
      software: headers['user-agent']
    };

    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))
  }


});

server.listen(port, function() {
  console.log('Node app is running on port', port);
});
