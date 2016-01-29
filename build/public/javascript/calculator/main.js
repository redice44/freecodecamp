'use strict';

(function () {
  var total = null;
  var display = "";
  var activeOp = null;

  function updateDisplay() {
    $('#display').html(display);
  }

  function calculate() {
    switch (activeOp) {
      case '+':
        console.log('Adding ' + total + ' + ' + parseFloat(display));
        total += parseFloat(display);
        break;
      case '-':
        console.log('Subtracting ' + total + ' - ' + parseFloat(display));
        total -= parseFloat(display);
        break;
      case '*':
        console.log('Multiplying ' + total + ' * ' + parseFloat(display));
        total *= parseFloat(display);
        break;
      case '/':
        console.log('Dividing ' + total + ' / ' + parseFloat(display));
        total /= parseFloat(display);
        break;
      default:
        console.log('Error: Unknown Operator.');
    }
  }

  function operand(op) {
    console.log('Operand: ' + op);
    display += op;
    updateDisplay();
  }

  function operator(op) {
    console.log('Operator: ' + op);
    if (activeOp !== null) {
      calculate();
    }
    if (total === null) {
      total = parseFloat(display);
    }
    display = "";
    activeOp = op;
  }

  function press(e) {
    var key = e.currentTarget;
    key = $(key).data('key');
    switch (key) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
      case '.':
        operand(key);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        operator(key);
        break;
      case '=':
        calculate();
        display = total;
        updateDisplay();
        display = "";
        activeOp = null;
        break;
      case 'AC':
        total = null;
        activeOp = null;
        display = "";
        updateDisplay();
        break;
      case 'CE':
        display = "";
        updateDisplay();
        break;
      default:
        console.log('Error: Invalid button input.');
    }
  }

  $(document).ready(function () {
    var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Eq', 'Add', 'Sub', 'Multi', 'Div', 'AC', 'CE', 'Dec'];
    keys.forEach(function (val) {
      $('#key' + val).on('click', press);
    });
  });
})();