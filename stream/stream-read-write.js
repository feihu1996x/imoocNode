const Readable = require('stream').Readable;
const Writable = require('stream').Writable;

let readStream = new Readable(),
    writeStream = new Writable();

readStream.push('I ');  // 将触发'data'事件
readStream.push('Love ');
readStream.push('You\n');
readStream.push(null);

writeStream._write = function(chunk, encode, callback){
    console.log(Buffer.isBuffer(chunk));
    console.log(chunk.toString());
    callback && callback();
};

// 管道：
// 一边读取
// 一边写入
readStream.pipe(writeStream);