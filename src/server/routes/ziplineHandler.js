function ziplineHandler() {
  this.tomatoClock = function(req, res, next) {
    return res.render('tomato-clock');
  };
}

module.exports = ziplineHandler;
