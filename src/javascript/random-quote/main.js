(function() {
  var data = {
    quotes: [
      {
        text: 'This is a quote 1',
        author: 'Matt',
        twitter: '@redice44'
      }, {
        text: 'This is a quote 2',
        author: 'Matt',
        twitter: '@redice44'
      }, {
        text: 'This is a quote 3',
        author: 'Matt',
        twitter: '@redice44'
      }, {
        text: 'This is a quote 4',
        author: 'Matt',
        twitter: '@redice44'
      }, {
        text: 'This is a quote 5',
        author: 'Matt',
        twitter: '@redice44'
      }, {
        text: 'This is a quote 6',
        author: 'Matt',
        twitter: '@redice44'
      }, {
        text: 'This is a quote 7',
        author: 'Matt',
        twitter: '@redice44'
      }
    ]
  };

  var tweetWebIntent = 'https://twitter.com/intent/tweet?text=';
  var tweetVia = '&via=redice44';

  function pickQuote() {
    var newQuoteIndex = Math.floor(Math.random() * data.quotes.length);
    console.log(newQuoteIndex);
    return data.quotes[newQuoteIndex];
  }

  function updateQuote(quote) {
    $('#quote').html(quote.text);
    $('#tweet').attr('href', tweetWebIntent + quote.text + tweetVia);
  }

  $(document).ready(function() {
    $('#new-quote').on('click', function(e) {
      updateQuote(pickQuote());
    });
  });
})();
