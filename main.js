// add
function add(a,b) {
    return a + b;
}
// subtract
function subtract(a,b) {
    return a - b;
}
// multiply
function multiply(a,b) {
    return a * b;
}
// divide
function divide(a,b) {
    return a / b;
}
// function that assigns operator to numbers
function operate(operator,a,b) {
    a = Number(a); // creates number object
    b = Number(b); // creates number object
    switch(operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            if (b === 0) {
                return null
            }
            else {
                return divide(a,b)
            }
    }
}