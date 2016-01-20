function contentHandler() {
  this.landingPage = (req, res) => res.render('main');
}

module.exports = contentHandler;
