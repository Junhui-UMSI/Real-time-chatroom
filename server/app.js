var express = require('express');
var path = require('path');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../client/build/'));

app.use('/static', express.static(path.join(__dirname, '../client/build/static/')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send("404 NOT FOUND");
});


module.exports = app;
