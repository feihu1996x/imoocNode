var fs = require('fs');

// 从一个文件里把数据分块读取
// 从而创建了一个可读的数据流
var readStream = fs.createReadStream('./stream-copy-logo.js');

var n = 0;

readStream
    .on('close', function(){
        console.log('data close');
    })
    .on('end', function(){
        // 数据流已经结束
        console.log(n);
        console.log('data ends');
    })
    .on('data', function(chunk){
        // 每当一个新的数据块准备好的时候
        // 会触发data事件
        // 把数据块以变量chunk的形式传给回调函数
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