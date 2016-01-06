function ziplineHandler() {
  this.tomatoClock = function(req, res, next) {
    return res.render('tomato-clock');
  };

  this.randomQuote = function(req, res, next) {
    return res.render('random-quote');
  };
}

module.exports = ziplineHandler;
