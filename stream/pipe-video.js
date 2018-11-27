var request = require('request');
var fs = require('fs');

// 创建一个可读的流
// 通过管道不断传递数据
// 从而实现一边下载一边写入
request('http://v3.mukewang.com/shizhan/5b308443e520e529098b45b3/H.mp4')
    .pipe(
        fs.createWriteStream('imooc.mp4')
    )
