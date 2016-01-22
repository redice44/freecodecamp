(function() {
  let data = {
    quotes: [
      {
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
      }
    ]
  };

  let tweetWebIntent = 'https://twitter.com/intent/tweet?text=';

  function pickQuote() {
    let newQuoteIndex = Math.floor(Math.random() * data.quotes.length);
    return data.quotes[newQuoteIndex];
  }

  function typeWriter(text, i) {
    if (text.length >= i) {
      setTimeout((pos) => {
        console.log(text.substr(0, pos));
        $('#quote').html(text.substr(0, pos) + '<span id="cursor"></span>');
        typeWriter(text, pos + 1);
      }, 50, i);
    }
  }

  function updateQuote(quote) {
    typeWriter(quote.text + ' -' + quote.author, 0);
    $('#author').html('- ' + quote.author);
    $('#tweet > a').attr('href', tweetWebIntent + quote.text + ' -' + quote.author);
  }

  function cursorBlink() {
    $('#cursor').toggleClass('blink');
  }

  $(document).ready(function() {
    updateQuote(pickQuote());
    $('#new-quote').on('click', function(e) {
      updateQuote(pickQuote());
    });

    setInterval(cursorBlink, 500);
  });
})();
