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
        case 'x':
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
    }
}

function populateDisplay() {
    if (displayValue === '') {
        display.textContent = '0';
    } else {
        display.textContent = displayValue;
    }
}

function buttonClick(id) {
    if (displayValue.length <= 6 && !isNaN(+id)) { // Number Clicked
        displayValue += id;
        populateDisplay();
    } else if (id === 'clear') { // Clear Clicked
        displayValue = '';
        firstNum = '';
        secondNum = '';
        currentOperator = '';
        populateDisplay();
    } else if (id === 'delete') { // Delete Clicked
        displayValue = (displayValue.slice(0, displayValue.length - 1 ));
        populateDisplay();
    } else if (id === '+' || id === '-' || id === 'x' || id === '/') {

    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClick(button.id);
    });
});