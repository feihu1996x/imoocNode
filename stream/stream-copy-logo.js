var fs = require('fs');

// 同步读取文件内容
var source = fs.readFileSync('../buffer/logo.png');

console.log(Buffer.isBuffer(source));

// 同步写入文件内容
fs.writeFileSync('./stream-copy-logo.png', source);
