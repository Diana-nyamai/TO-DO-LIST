var http = require('http');

var myServer = http.createServer((req, res) => {
    console.log("request received", req.url);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("hello there!");
})

myServer.listen(3000, '127.0.0.1');
console.log("listening on port 3000");