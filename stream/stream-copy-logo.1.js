var fs = require('fs');

// 基于文件，创建一个可读的流
var readStream = fs.createReadStream('../buffer/logo.png');

// 基于文件，创建一个可写的流
var writeStream = fs.createWriteStream('./stream-copy-logo.png');

readStream
    .on('data', function(chunk){
        if(writeStream.write(chunk) === false){
            // 数据块尚未完全被写入
            // 暂停可读流
            console.log('still cached');
            readStream.pause();
        }
    })
    .on('end', function(){
        writeStream.end();
    })

writeStream
    .on('drain', function(){
        // 数据块完全被写入
        // 继续可读流
        console.log('data drains');
        readStream.resume();
    })