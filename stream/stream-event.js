var fs = require('fs');

var readStream = fs.createReadStream('./stream-copy-logo.js');

var n = 0;

readStream
    .on('close', function(){
        console.log('data close');
    })
    .on('end', function(){
        console.log(n);
        console.log('data ends');
    })
    .on('data', function(chunk){
        n++;
        console.log('data emits');
        // console.log(Buffer.isBuffer(chunk));
        // console.log(chunk.toString());
        readStream.pause();
        console.log('data pause');
        setTimeout(function(){
            console.log('data pause end');
            readStream.resume()
        }, 3000);
    })
    .on('readable', function(){
        console.log('data is readable');
    })
    .on('error', function(){
        console.log('data read error: ' + e);
    });