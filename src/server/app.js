var express = require('express');
var app = express();
var config = require('./config/');
var routes = require('./routes/');

// Configure Application
config(app);

// Register Routes
routes(app);

app.listen(app.get('port'), function() {
  console.log('Express Server listening on port: ' + app.get('port'));
});
