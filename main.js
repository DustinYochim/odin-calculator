let screen = document.querySelector('.screen');
let displayValue = '';

let supportedOperators = ['+', '-', '*', '/'];

let numOne = '';
let op = null;
let result = '';

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(operator, x, y) {
    switch(operator) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            console.log("Not a supported operator.")
    }
}

function buttonClick(x) {

}

function clear() {
    // clear screen
    screen.textContent = '';
    // clear variables
    displayValue = '';
    numOne = '';
    op = '';
    numTwo = '';
    result = '';

}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClick(button.className);
    });
});