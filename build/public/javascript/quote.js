"use strict";

(function () {
  var data = {
    quotes: [{
      text: "Success is a project that's always under construction.",
      author: 'Pat Summitt'
    }, {
      text: "I don't mind getting beaten, but I hate to lose.",
      author: 'Reggie Jackson'
    }, {
      text: 'You should never be proud of doing the right thing. You should just do it.',
      author: 'Dean Smith'
    }, {
      text: 'Some lessons need to be experienced to be understood.',
      author: 'Ronda Rousey'
    }, {
      text: "Being nervous isn't a bad thing. It means something important is happening.",
      author: 'Michael Jordon'
    }, {
      text: 'Success is performing to the limit of your potential.',
      author: 'Bob Knight'
    }, {
      text: 'Adapt what is useful, reject what is useless, and add what is specifically your own.',
      author: 'Bruce Lee'
    }, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Any Web Developer Ever'
    }]
  };

  var tweetWebIntent = 'https://twitter.com/intent/tweet?text=';

  function getQuote() {
    var oldQuote = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

    var newQuoteIndex = undefined;
    do {
      newQuoteIndex = Math.floor(Math.random() * data.quotes.length);
    } while (oldQuote === data.quotes[newQuoteIndex].text + ' -' + data.quotes[newQuoteIndex].author);

    return data.quotes[newQuoteIndex].text + ' -' + data.quotes[newQuoteIndex].author;
  }

  function typeWriter(text, i) {
    var reverse = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var cb = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

    if (text.length >= i && !reverse || i >= 0 && reverse) {
      setTimeout(function (pos) {
        //console.log(text.substr(0, pos));
        $('#quote').html(text.substr(0, pos) + '<span id="cursor"></span>');
        typeWriter(text, reverse ? pos - 1 : pos + 1, reverse, cb);
      }, reverse ? 25 : 50, i);
    } else if (typeof cb === 'function') {
      cb();
    }
  }

  function updateTwitter(quote) {
    $('#tweet > a').attr('href', tweetWebIntent + quote);
  }

  function cursorBlink() {
    $('#cursor').toggleClass('blink');
  }

  $(document).ready(function () {
    var currQuote = getQuote();
    // Display initial quote
    typeWriter(currQuote, 0);
    updateTwitter(currQuote);

    $('#new-quote').on('click', function (e) {
      // Delete current quote
      typeWriter(currQuote, currQuote.length, true, function () {
        currQuote = getQuote(currQuote);
        updateTwitter(currQuote);
        typeWriter(currQuote, 0);
      });
    });

    setInterval(cursorBlink, 500);
  });
})();