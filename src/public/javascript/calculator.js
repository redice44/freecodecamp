(function() {
  let total = 0;
  let display = '';
  let operator = '+';

  function reset() {
    total = 0;
    display = '';
    operator = '+'; // Inputting the 1st number is adding it to 0
  }

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
    updateDisplay();

    if (button === '=') {
      reset();
    } else {
      operator = button;
      display = '';
    }
  }

  function number(button) {
    // Handle limiting the size. Maybe.

    // do nothing if attempting to add more than 1 decimal point
    if (!(button === '.' && display.search(/\./) !== -1)) {
      display += button;
    }
    updateDisplay();
  }

  function determineButton(e) {
    let button = $(e.currentTarget).html();

    switch (button) {
      case 'C':
        reset();
        updateDisplay();
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
