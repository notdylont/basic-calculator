let first;
let second;
let operation;

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, op) {
  if (op === "+") add(a, b);
  if (op === "-") substract(a, b);
  if (op === "x") multiply(a, b);
  if (op === "÷") divide(a, b);
}

const contain = document.querySelector(".container");
const numContainer = document.querySelector(".numbers");
