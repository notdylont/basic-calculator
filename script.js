let first = null;
let second = null;
let operation = null;
const ops = ['+', '-', 'x', '÷'];

const contain = document.querySelector('.container');
const btns = document.querySelectorAll('.btns');
const display = document.querySelector('.calc-display');

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return 'Error';
  else return a / b;
}

let displayCalc = '';
btns.forEach(function (button) {
  button.addEventListener('click', function () {
    const buttonText = button.textContent;

    if (buttonText === '=') {
      second = +displayCalc;
      console.log(second);
      displayCalc = evaluate(first, second, operation);
      console.log(displayCalc);
      display.textContent = displayCalc;
      first = null;
      second = null;
      operation = null;
      displayCalc = '';
    } else if (ops.includes(buttonText)) {
      first = +displayCalc;
      console.log(first);
      operation = buttonText;
      displayCalc = '';
    } else {
      displayCalc += buttonText;
      display.textContent = displayCalc;
    }
  });
});

const operationPressed = document.querySelectorAll('.ops');

function evaluate(first, second, op) {
  switch (op) {
    case '+':
      return add(first, second);
      break;
    case '-':
      return subtract(first, second);
      break;
    case 'x':
      return multiply(first, second);
      break;
    case '÷':
      return divide(first, second);
      break;
    default:
      return 'Error';
      break;
  }
}
