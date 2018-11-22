const http = require('http');
const querystring = require('querystring');

let postData = querystring.stringify({
    'comment[movie]': '5bec33d0e605581c4fcbd2f2',
    'comment[from]': '5be92fcf66dee5334bde599c',
    'comment[content]': '技术刷评论~',
});

let options = {
    hostname: 'dev.feihu1996.cn',
    port: 80,
    path: '/koaMovie/movie/comment',
    method: 'POST',
    headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
        'Cookies': 'koa:sess=eyJ1c2VyIjp7Il9pZCI6IjViZTkyZmNmNjZkZWU1MzM0YmRlNTk5YyIsIm5pY2tuYW1lIjoiYW5ndXMiLCJyb2xlIjoiYWRtaW4ifSwiX2V4cGlyZSI6MTU0Mjk0OTEyMDI2OSwiX21heEFnZSI6ODY0MDAwMDB9;koa:sess.sig=sPpsCtHSpcZl5EnxXaZXw2uxiDU',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Referer': 'http://dev.feihu1996.cn/koaMovie/movie/detail/5bec33d0e605581c4fcbd2f2',
        'Origin': 'http://dev.feihu1996.cn',
        'Connection': 'keep-alive',
        'Host': 'dev.feihu1996.cn',
    },
};

const req = http.request(options, (res)=>{
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(postData);

req.end();