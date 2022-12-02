let screen = document.querySelector('.screen');
let displayValue = '';

let supportedOperators = ['+', '-', 'x', '/'];

let numOne = '';
let op = '';
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
    if (y != 0) {
        return x / y;
    }

}

function percentage(x) {
    return x / 100;
}

function operate(operator, x, y) {
    switch(operator) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case 'x':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        case '%':
            return percentage(x,y);
        default:
            console.log("Not a supported operator.")
    }
}

function buttonClick(x) {
    // PERCENT
    if (x === '%') {
        displayValue = percentage(+displayValue);
        screen.textContent = displayValue;
    }
    // NUMBER
    if (!(isNaN(x))) {
        if(displayValue.length <= 8) {
            displayValue += x;
            screen.textContent = roundNumber(displayValue);
        }
    }
    // OPERATOR
    if(supportedOperators.includes(x)) {
        if (displayValue === '') {
            op = x;
        } else if(numOne != '') {
            if (op === '/' && displayValue === '0') {
                screen.textContent = 'ERROR';
                displayValue = '';
                numOne = '';
                op = '';
                result = '';
            } else {
                numOne = operate(op,+numOne,+displayValue);
                screen.textContent = roundNumber(numOne);
                displayValue = '';
                op = x;
            }
 
        } else {
            op = x;
            numOne = displayValue;
            displayValue = '';
        }
    }

    // EQUALS
    if(x === '=') {
        if(op != '' && numOne != '' && displayValue != '') {
            if (op === '/' && displayValue === '0') {
                screen.textContent = 'ERROR';
                displayValue = '';
                numOne = '';
                op = '';
                result = '';
            } else {
                numOne = operate(op,+numOne,+displayValue);
                displayValue = '';
                screen.textContent = roundNumber(numOne);
            }

        }

    }

    // DECIMAL
    if (x === '.') {
        if (!displayValue.includes('.') && displayValue != '') {
            displayValue += x;
            screen.textContent = roundNumber(displayValue);
        }
    }

    // NEGATION
    if (x === '+/-') {
        displayValue = -displayValue;
        screen.textContent = displayValue;
    }

    // BACKSPACE
    if(x === 'Backspace') {
        if (displayValue.length === 1 || displayValue.length === 0) {
            clear();
        } else {
            displayValue = displayValue.slice(0,-1);
            screen.textContent = displayValue;
        }

    }

    // CLEAR
    if (x === 'AC') {
        clear();
    }
}

function clear() {
    // clear screen
    screen.textContent = '';
    // clear variables
    displayValue = '';
    numOne = '';
    op = '';
    result = '';
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClick(button.textContent);
    });
});

const key = document.addEventListener('keydown', (event) => {
    var name = event.key;
    event.preventDefault();
    if (!(isNaN(name))) {
        buttonClick(name);
    } else if (supportedOperators.includes(name)) {
        buttonClick(name);
    } else if (name === '=' || name === 'Enter') {
        buttonClick('=');
    } else if (name === '.') {
        buttonClick(name);
    } else if (name === '*') {
        buttonClick('x');
    } else if (name === 'Backspace') {
        buttonClick(name);
    } else if (name === '%') {
        buttonClick(name);
    }
})
