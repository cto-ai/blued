const site = require('node-static');
const http = require('http');

const file = new(site.Server)();

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8080);
