(function() {
  let total = 0;
  let display = '';
  let operator = '+';

  function updateDisplay() {
    $('#panel p').html(display);
  }

  function operation(button) {
    let value = parseFloat(display);

    switch (operator) {
      case '/':
        if (value === 0) {
          total = 'Div/0';
          button = '='; // Force reset
        } else {
          total /= value;
        }
        break;
      case '*':
        total *= value;
        break;
      case '-':
        total -= value;
        break;
      case '+':
        total += value;
        break;
      default:
        console.log('Unhandled Operator: %s', operator);
    }

    display = total.toString();

    if (button === '=') {
      operator = '+';
      total = 0;
    } else {
      operator = button;
    }

    updateDisplay();
    display = '';
  }

  function number(button) {
    // Handle limiting the size. Maybe.
    display += button;
    updateDisplay();
  }

  function determineButton(e) {
    let button = $(e.currentTarget).html();

    switch(button) {
      case 'C':
        break;
      case '=':
      case '/':
      case '*':
      case '-':
      case '+':
        operation(button);
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        number(button);
        break;
      default:
        console.log('Uncaught button: %s', button);
    }
  }

  $(document).ready(() => {
    updateDisplay();
    $('.button').on('click', determineButton);
  });
})();
