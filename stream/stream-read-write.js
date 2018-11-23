const Readable = require('stream').Readable;
const Writable = require('stream').Writable;

let readStream = new Readable(),
    writeStream = new Writable();

readStream.push('I ');
readStream.push('Love ');
readStream.push('You\n');
readStream.push(null);

writeStream._write = function(chunk, encode, callback){
    console.log(Buffer.isBuffer(chunk));
    console.log(chunk.toString());
    callback && callback();
};

readStream.pipe(writeStream);