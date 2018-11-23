var stream = require('stream');
var util = require('util');

function ReadStream(){
    stream.Readable.call(this);
}

util.inherits(ReadStream, stream.Readable);

ReadStream.prototype._read = function(){
    this.push('I ');
    this.push('Love ');
    this.push('You\n');
    this.push(null);
};

function WriteStream(){
    stream.Writable.call(this);
    this._cached = new Buffer('');
}

util.inherits(WriteStream, stream.Writable);

WriteStream.prototype._write = function(chunk, encode, callback){
    // console.log(Buffer.isBuffer(chunk));
    console.log(chunk.toString());
    callback && callback();
};

function TransformStream(){
    stream.Transform.call(this);
}

util.inherits(TransformStream, stream.Transform);

TransformStream.prototype._transform = function(chunk, encode, callback){
    this.push(chunk);
    callback && callback();
}

TransformStream.prototype._flush = function(callback){
    this.push('Oh, Yeah!');
    callback();
};

let rs = new ReadStream(),
    ws = new WriteStream(),
    ts = new TransformStream();

rs.pipe(ts).pipe(ws);