let express = require('express');
let app = express();
let config = require('./config/');
let routes = require('./routes/');

// Configure Application
config(app, express);

// Register Routes
routes(app);

app.listen(app.get('port'), () => {
  console.log('Express Server listening on port: ' + app.get('port'));
});
