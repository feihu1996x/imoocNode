const https = require('https');
const fs = require('fs');

const options = {
    keys: fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cert.pem'),
};

https
    .createServer(options, (req, res)=>{
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, HTTPS Server!');
    })
    .listen(8090)