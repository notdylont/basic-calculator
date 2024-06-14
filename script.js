let first;
let second;
let operation;

const contain = document.querySelector(".container");
const btns = document.querySelectorAll(".btns");
const display = document.querySelector(".calc-display");

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

let displayCalc = "";
btns.forEach(function (buttons) {
  buttons.addEventListener("click", function () {
    if (buttons.textContent !== "clr") {
      display.textContent += buttons.textContent;
      displayCalc += buttons.textContent;
      console.log(displayCalc);
    } else {
      displayCalc = "";
      display.textContent = "";
    }
  });
});

const operationPressed = document.querySelectorAll(".ops");
function ops() {
  operationPressed.forEach(function (ops) {
    ops.addEventListener("click", function () {});
  });
}
