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
            add(x,y);
            break;
        case '-':
            subtract(x,y);
            break;
        case '*':
            multiply(x,y);
            break;
        case '/':
            divide(x,y);
            break;
    }
}