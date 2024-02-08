const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

// Send-Response
const server = http.createServer((req, res) => {
    // console.log('incoming request>>>', req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World, I'm learning node.js\n");
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});