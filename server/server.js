var http = require('http');

var myServer = http.createServer((req, res) => {
    console.log("request received", req.url);

    res.writeHead(200, {'Content-Type': 'text/plain'});
})