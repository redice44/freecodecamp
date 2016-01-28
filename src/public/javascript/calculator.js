(function() {
  function generateButtons(buttons) {
    buttons.forEach((value) => {
      $('#buttons').append($(document.createElement('div')).addClass('button').html(value));
    });
  }

  $(document).ready(() => {
    let buttons = [
      'C',
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+'
    ];

    //generateButtons(buttons);
  });
})();
