'use strict';

function ziplineHandler() {
  this.tomatoClock = function (req, res) {
    return res.render('tomato-clock');
  };

  this.randomQuote = function (req, res) {
    return res.render('quote');
  };

  this.calculator = function (req, res) {
    return res.render('calculator');
  };
}

module.exports = ziplineHandler;