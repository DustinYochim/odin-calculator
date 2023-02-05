let displayValue = "";
let savedNum = "";
let operator = "";

let supportedOperators = ["+", "-", "x", "/"];

const display = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    alert("Cannot divide by zero");
    return;
  }
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      return Math.round((add(x, y) + Number.EPSILON) * 100) / 100;
      break;
    case "-":
      return Math.round((subtract(x, y) + Number.EPSILON) * 100) / 100;
      break;
    case "x":
      return Math.round((multiply(x, y) + Number.EPSILON) * 100) / 100;
      break;
    case "/":
      return Math.round((divide(x, y) + Number.EPSILON) * 100) / 100;
      break;
  }
}

function populateDisplay() {
  display.textContent = displayValue;
}

function clearClicked() {
  displayValue = "";
  savedNum = "";
  operator = "";
  populateDisplay();
}

function deleteClicked() {
  if (displayValue.length >= 1) {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    populateDisplay();
  }
}

function numberClicked(id) {
  if (id === "." && displayValue.includes(".")) return;
  displayValue += id;
  populateDisplay();
}

function operatorClicked(id) {
  if (operator !== "") {
    displayValue = operate(operator, +savedNum, +displayValue);
    populateDisplay();
    savedNum = displayValue;
    displayValue = "";
    operator = id;
  } else {
    savedNum = displayValue;
    displayValue = "";
    operator = id;
  }
}

function equalsClicked() {
  if (displayValue !== "" && savedNum !== "" && operator !== "") {
    displayValue = operate(operator, +savedNum, +displayValue);
    populateDisplay();
    savedNum = displayValue;
    operator = "";
  }
}

function handleButtonClick(id) {
  if (id === "clear") {
    clearClicked();
  } else if (id === "delete") {
    deleteClicked();
  } else if (supportedOperators.includes(id)) {
    operatorClicked(id);
  } else if (id === "=") {
    equalsClicked();
  } else if (!isNaN(id) || id === ".") {
    numberClicked(id);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button.id);
  });
});

window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`button[data-key="${e.key}"]`);
  if (!key) return;
  handleButtonClick(key.id);
});
