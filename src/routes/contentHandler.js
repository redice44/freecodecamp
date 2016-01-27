function contentHandler() {
  this.landingPage = (req, res) => res.render('portfolio');
}

module.exports = contentHandler;
