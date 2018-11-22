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

function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var courseData = [];
    chapters.each(function(item){
        var chapter = $(this);
        var chapterTitle = chapter.find('h3').text().trim();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: [],
        };
        videos.each(function(item){
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text().trim();
            var id = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                title: videoTitle,
                id: id,
            });
        });
        courseData.push(chapterData);
    });
    return courseData;
}

function printCourseInfo(courseData){
    courseData.forEach(function(item){
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');
        item.videos.forEach(function(item){
            console.log('   【' + item.id + '】 ' + item.title + '\n');
        });
    });
}