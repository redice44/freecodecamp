(function() {
  var data = {
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
        text: 'Success is performing to the limit of your potential',
        author: 'Bob Knight'
      }, {
        text: 'Adapt what is useful, reject what is useless, and add what is specifically your own',
        author: 'Bruce Lee'
      }
    ]
  };

  var tweetWebIntent = 'https://twitter.com/intent/tweet?text=';

  function pickQuote() {
    var newQuoteIndex = Math.floor(Math.random() * data.quotes.length);
    console.log(newQuoteIndex);
    return data.quotes[newQuoteIndex];
  }

  function updateQuote(quote) {
    $('#quote').html(quote.text);
    $('#author').html('- ' + quote.author);
    $('#tweet').attr('href', tweetWebIntent + quote.text + ' -' + quote.author);
  }

  $(document).ready(function() {
    updateQuote(pickQuote());
    $('#new-quote').on('click', function(e) {
      updateQuote(pickQuote());
    });
  });
})();
