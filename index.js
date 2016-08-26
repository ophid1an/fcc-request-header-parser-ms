var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function (request, response) {
  if (request.method === 'GET') {
    var headers = request.headers;
    var keys = Object.keys(headers);
    keys.forEach(function(key) {
      console.log(key + ': ' + '('+typeof headers[key]+') ' + headers[key]);
    });

  }


});

server.listen(port, function() {
  console.log('Node app is running on port', port);
});
