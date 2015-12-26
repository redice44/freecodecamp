var ContentHandler = require('./contentHandler.js');

module.exports = function(app) {
  var contentHandler = new ContentHandler();

  app.get('/', contentHandler.landingPage);
};
