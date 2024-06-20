let first = null;
let second = null;
let operation = null;
let opClicked = false;
const ops = ['+', '-', 'x', '÷'];

const numBtns = document.querySelectorAll('.numbers');
const opsBtns = document.querySelectorAll('.ops');
const display = document.querySelector('.calc-display');
const equal = document.querySelector('#equal');
const clr = document.querySelector('#clear');

let displayCalc = '';

numBtns.forEach(function (numsButton) {
  numsButton.addEventListener('click', function () {
    const buttonText = numsButton.textContent;
    if (displayCalc.length < 10) {
      if (opClicked) {
        displayCalc = '';
        opClicked = false;
      }
      displayCalc += buttonText;
      display.textContent = displayCalc;
    }
  });
});

opsBtns.forEach(function (opsBtn) {
  opsBtn.addEventListener('click', function () {
    const op = opsBtn.textContent;
    display.textContent = '';
    if (op === 'clr') {
      clear();
      return;
    } else if (op === '=') {
      if (first !== null && operation !== null) {
        second = parseFloat(displayCalc);
        displayCalc = evaluate(first, second, operation).toString();
        display.textContent = displayCalc;
        first = null;
        second = null;
        operation = null;
        opClicked = false;
      }
      return;
    } else {
      if (first === null) {
        first = parseFloat(displayCalc);
      } else if (!opClicked) {
        second = parseFloat(displayCalc);
        first = evaluate(first, second, operation);
      }
      operation = op;
      opClicked = true;
      displayCalc = first.toString();
      display.textContent = displayCalc;
    }
  });
});

function clear() {
  display.textContent = '';
  displayCalc = '';
  first = null;
  second = null;
  operation = null;
  opClicked = false;
}

clr.addEventListener('click', clear);

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

function evaluate(a, b, op) {
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
    default:
      return 'Error';
  }
}
