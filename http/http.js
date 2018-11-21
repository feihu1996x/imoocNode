var http = require('http');

http
    .createServer((req, res)=>{
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello, Node.js');
        res.end();
    })
    .listen(2018, ()=>{
        console.log("Server running at http://127.0.0.1:2018");
    });