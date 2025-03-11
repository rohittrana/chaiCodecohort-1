const numbers = document.querySelectorAll('[id^="item-"]');

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const multBtn = document.getElementById("mult");
const divBtn = document.getElementById("div");
const equalBtn = document.getElementById("eql");

const input = document.getElementById("input");

let firstOperand = null;
let operation = null;
let resetInput = false;

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    const digit = button.textContent;

    if (resetInput) {
      input.value = digit;
      resetInput = false;
    } else {
      input.value = (input.value || "") + digit;
    }
  });
});

function setOperation(op) {
  firstOperand = parseFloat(input.value || "0");
  operation = op;

  input.value += " " + getOperatorSymbol(op) + " ";
  resetInput = true;
}

function getOperatorSymbol(op) {
  switch (op) {
    case "add":
      return "+";
    case "sub":
      return "-";
    case "mult":
      return "*";
    case "div":
      return "/";
    default:
      return "";
  }
}

addBtn.addEventListener("click", () => setOperation("add"));
subBtn.addEventListener("click", () => setOperation("sub"));
multBtn.addEventListener("click", () => setOperation("mult"));
divBtn.addEventListener("click", () => setOperation("div"));

equalBtn.addEventListener("click", () => {
  if (operation === null || firstOperand === null) return;

  const inputParts = input.value.split(" ");
  const secondOperand = parseFloat(inputParts[inputParts.length - 1] || "0");

  let result = 0;

  switch (operation) {
    case "add":
      result = add(firstOperand, secondOperand);
      break;
    case "sub":
      result = sub(firstOperand, secondOperand);
      break;
    case "mult":
      result = mult(firstOperand, secondOperand);
      break;
    case "div":
      if (secondOperand === 0) {
        input.value = "Error";
        return;
      }
      result = div(firstOperand, secondOperand);
      break;
  }

  input.value = result;
  firstOperand = result;
  operation = null;
});

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mult(a, b) {
  return a * b;
}
function reset() {
  input.value = "";
  firstOperand = null;
  operation = null;
}
