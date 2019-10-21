var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');
app.listen(1337);

io.set('log level', 1);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err) {
            res.writeHead(500);
            return res.end('Error');
        }
        res.writeHead(200);
        res.write(data);
        res.end();
    })
}

// clientからイベントを待ち受けて
io.sockets.on('connection', function(socket) {
   socket.on('emit_from_client', function(data) {
      // console.log(data);

       // room機能を使ってみよう
       socket.join(data.room);
       socket.json.emit('emit_from_client', 'you are in' + data.room);
       socket.broadcast.to(data.room).emit('emit_from_server', data.msg);


       // ソケットごとにデータを保存する
       socket.set('client_name', data.name);
       socket.get('client_name', function(err, name) {
           socket.sockets.emit('emit_from_server', '[' + name + '] : ' + data.msg);
       });

       // 接続しているソケットのみ
       socket.emit('emit_from_server', 'Hello from server: ' + data);

       // 接続しているソケット以外全部
       socket.broadcast.emit('emit_from_server', 'Hello from server: ' + data);

       // 接続している全部
       socket.sockets.emit('emit_from_server', '[' + socket.id + '] : ' + data);
   });
});

//  namespaceを使ってみよう
var chat = io.of('/chat').on('connection', function(socket) {
    socket.on('emit_from_client', function(data) {
        // console.log(data);

        // room機能を使ってみよう
        socket.join(data.room);
        socket.json.emit('emit_from_client', 'you are in' + data.room);
        socket.broadcast.to(data.room).emit('emit_from_server', data.msg);


        // ソケットごとにデータを保存する
        socket.set('client_name', data.name);
        socket.get('client_name', function(err, name) {
            socket.sockets.emit('emit_from_server', '[' + name + '] : ' + data.msg);
        });

        // 接続しているソケットのみ
        socket.emit('emit_from_server', 'Hello from server: ' + data);

        // 接続しているソケット以外全部
        socket.broadcast.emit('emit_from_server', 'Hello from server: ' + data);

        // 接続している全部
        socket.sockets.emit('emit_from_server', '[' + socket.id + '] : ' + data);
    });
});

var news = io.of('/news').on('connection', function(socket) {
    socket.sockets.emit('emit_from_server', 'today: ' + new Date());
});
