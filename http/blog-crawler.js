var http = require('http');
var url = 'http://www.feihu1996.cn/?id=293';

http.get(url, (res)=>{
    var html = '';
    res.on('data', (data)=>{
        html += data;
    });
    res.on('end', ()=>{
        console.log(html);
    });
}).on('error', (error)=>{
    console.log(error);
});