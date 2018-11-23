var http = require('http');
var fs = require('fs');
var request = require('request');

http
    .createServer(function(req, res){
        // fs.readFile('../buffer/logo.png', function(err, data){
        //     if(err){
        //         res.end('file not exists!');
        //     }else{
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.end(data);
        //     }
        // });

        // 一边读一边pipe
        // fs.createReadStream('../buffer/logo.png').pipe(res);
        
        // 一边下载一边pipe
        request('https://img1.mukewang.com/szimg/59c860220001247d05400300-360-202.jpg')
            .pipe(res);
    })
    .listen(8090, ()=>{
        console.log('Server running at http://127.0.0.1:8090');
    })