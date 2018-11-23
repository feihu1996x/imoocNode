var http = require('http');
var cheerio=require('cheerio');
var url='http://www.imooc.com/learn/348';

http.get(url, (res)=>{
    var html = '';
    res.on('data', (data)=>{
        html += data;
    });
    res.on('end', ()=>{
        var courseData = filterChapters(html);
        printCourseInfo(courseData);
    });
}).on('error', (error)=>{
    console.log(error);
});
