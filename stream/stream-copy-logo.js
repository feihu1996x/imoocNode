var fs = require('fs');

var source = fs.readFileSync('../buffer/logo.png');

console.log(Buffer.isBuffer(source));

fs.writeFileSync('./stream-copy-logo.png', source);

