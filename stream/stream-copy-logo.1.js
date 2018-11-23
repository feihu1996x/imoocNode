var fs = require('fs');

var readStream = fs.createReadStream('../buffer/logo.png');
var writeStream = fs.createWriteStream('./stream-copy-logo.png');

readStream
    .on('data', function(chunk){
        if(writeStream.write(chunk) === false){
            console.log('still cached');
            readStream.pause();
        }
    })
    .on('end', function(){
        writeStream.end();
    })

writeStream
    .on('drain', function(){
        console.log('data drains');
        readStream.resume();
    })