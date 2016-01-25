function ziplineHandler() {
  this.tomatoClock = (req, res) => res.render('tomato-clock');

  this.randomQuote = (req, res) => res.render('quote');

  this.calculator = (req, res) => res.render('calculator');
}

module.exports = ziplineHandler;
