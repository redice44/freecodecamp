let ContentHandler = require('./contentHandler.js');
let ZiplineHandler = require('./ziplineHandler.js');

module.exports = (app) => {
  let contentHandler = new ContentHandler();
  let ziplineHandler = new ZiplineHandler();

  app.get('/', contentHandler.landingPage);
  app.get('/tomato-clock', ziplineHandler.tomatoClock);
  app.get('/quotes', ziplineHandler.randomQuote);
  app.get('/calculator', ziplineHandler.calculator);
};
