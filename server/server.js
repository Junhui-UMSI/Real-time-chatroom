var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var index = require('./routes/index.js');

var app = express();

// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../client/build/'));

app.use('/static', express.static(path.join(__dirname, '../client/build/static/')));

app.use('/', index);

var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();

var server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('error', onError);
server.on('listening', onListening);

function onError(error){
  throw error;
}

function onListening(){
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log('listening on ' + bind);
}
