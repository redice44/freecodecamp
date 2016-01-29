'use strict';

function contentHandler() {
  this.landingPage = function (req, res) {
    return res.render('portfolio');
  };
}

module.exports = contentHandler;