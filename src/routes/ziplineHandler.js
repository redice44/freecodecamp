function ziplineHandler() {
  this.tomatoClock = function(req, res, next) {
    return res.render('tomato-clock');
  };

  this.randomQuote = function(req, res, next) {
    return res.render('random-quote');
  };

  this.calculator = function(req, res, next) {
    return res.render('calculator');
  };
}

module.exports = ziplineHandler;
