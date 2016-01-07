var ContentHandler = require('./contentHandler.js');
var ZiplineHandler = require('./ziplineHandler.js');

module.exports = function(app) {
  var contentHandler = new ContentHandler();
  var ziplineHandler = new ZiplineHandler();

  app.get('/', contentHandler.landingPage);
  app.get('/tomato-clock', ziplineHandler.tomatoClock);
  app.get('/quotes', ziplineHandler.randomQuote);
  app.get('/calculator', ziplineHandler.calculator);
};
