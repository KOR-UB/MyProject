var http = require("http");
var fs = require("fs");
var url = require("url");

var numstr = /^[^]\d/;

function templateHTML(title, list, body, css) {
    return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>poiemaweb Clone - ${title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
        <style>
           ${css}
        </style>
    </head>
    <body>
        <header>
            <h1>PoiemaWeb: Fastcampus Frontend School</h1>
        </header>
        <div class="wraper" id="wraper">
            <div class="sec">
                <div class="title">
                    <i class="devicon-mongodb-plain"></i>
                    <div class="titleBx">
                        <h2>들어가며</h2>
                        <p><em class="titlenum">1 </em>lessons</p> 
                    </div>
                </div>
                <div class="content">
                    <ol>
                        <li><a href="#">기본 개념과 동작 원리 이해의 중요성</a></li>
                    </ol>
                </div>
            </div>
            <div class="sec sec2">
                <div class="title">
                    <i class="devicon-javascript-plain"></i>
                    <div class="titleBx">
                        <h2>JavaScript</h2>
                        <p><em class="titlenum">1 </em>lessons</p> 
                    </div>
                </div>
                <div class="content">
                    ${list}
                </div>
            </div>
        </div>
        ${body}
    </body>
    </html>
    `;
}

function templateList(filelist) {
    var list = '<ol>';
    var i = 0;
    while (i < filelist.length) {
        var filelistReplace = filelist[i].replace(numstr, "");
        list = list + `<li><a href="/?id=${filelist[i]}" class="list-a">${filelistReplace}</a></li>`;
        i = i + 1;
    }
    list = list + '</ol>';
    return list;
}

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readdir('./data', function (error, filelist) {
                fs.readFile(`indexcss`, 'utf8', function (err, indexcss) {
                    var title = '';
                    var description = '';
                    var list = templateList(filelist);
                    var template = templateHTML(title, list, `<h2>${title}</h2>${description}`, indexcss);
                    response.writeHead(200);
                    response.end(template);
                });
            })
        } else {
            fs.readdir('./data', function (error, filelist) {
                fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
                    fs.readFile(`indexcss`, 'utf8', function (err, indexcss) {
                        var title = queryData.id;
                        var list = templateList(filelist);
                        title = title.replace(numstr, "");
                        var template = templateHTML(title, list, `<h2 class="js-title">${title}</h2><p class="js-description">${description}</p>`, indexcss);
                        response.writeHead(200);
                        response.end(template);
                    });
                });
            });
        }
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});

app.listen(3000);