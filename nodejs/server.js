var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    ps = require('querystring');

var settings = require('./settings');
var server = http.createServer();

// フォームを表示させてみよう
var bbs = fs.readFileSync(__dirname + '/public/bbs.ejs', 'utf-8');
var posts = [];

function renderForm(posts, res) {
    var data = ejs.render(bbs, {
        posts: posts
    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
}

// ejsを使ってベージを表示してみよう
var template = fs.readFileSync(__dirname + '/public/hello.ejs', 'utf-8');
var n = 0;

server.on('request', function(req, res) {
    // フォームを表示させてみよう
    if (req.method === 'POST') {
        req.data = "";
        req.on("readable", function(){
            req.data += req.read();
        });
        req.on("end", function() {
            var query = qs.parse(req.data);
            posts.push(query.name);
            renderForm(posts, res);
        });
    } else {
        renderForm(posts, res);
    }


    // ejsを使ってベージを表示してみよう
    n++;
    var data = ejs.render(template, {
        title: "hello",
        content: "<strong>World!</strong>",
        n: n
    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();

    // HTMLファイルを読み込んでみよう
    fs.readFile(__dirname + '/public/index.html', 'utf-8', function(err, data){
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Not found');
            return res.end();
        }

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        res.end();
    });

    switch (req.url) {
        case '/about':
            msg = "about this page";
            break;
        case '/profile':
            msg = "profile this page";
            break;
        default:
            msg = "wrong page";
            break;
    }
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write(msg);
   res.end();
});

server.listen(settings.port, settings.host);
console.log("server listening...");