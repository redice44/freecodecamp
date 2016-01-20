function contentHandler() {
  this.landingPage = function(req, res, next) {
    return res.render('main');
  };
}

module.exports = contentHandler;
