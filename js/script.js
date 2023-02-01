let displayValue = '';
let firstNum = '';
let currentOperator = '';
let secondNum = '';

const display = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    if (y === 0) {
        alert("Cannot divide by zero");
        return;
    }
    return x / y;
}

function operate(operator, x, y) {
    switch(operator) {
        case '+':
            return add(x,y);
            break;
        case '-':
            return subtract(x,y);
            break;
        case '*':
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
    }
}