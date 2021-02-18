var http = require('http');
var date = require('./date.js');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!'+date.myDateTime());
}).listen(8090);