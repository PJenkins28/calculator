class Calculator {
    constructor(previousOperandElement,currentOperandElement) {
        this.previousOperandElement = previousOperandElement
        this.currentOperandElement = currentOperandElement
        this.clear()
    }

    clear() {
       this.currentOperand = '';
       this.previousOperand = '';
       this.operation = undefined; 
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    append(num) {
        if (num === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + num.toString()
    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computation = add(prev,current);
                break
            case '-':
                computation = subtract(prev,current)
                break
            case 'x':
                computation = multiply(prev,current)    
                break
            case '÷':
                if (current == 0)
                    return null
                else
                    computation = divide(prev,current)
                    break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    display() {
        this.currentOperandElement.innerText = this.currentOperand
        if(this.operation != null) {
            this.previousOperandElement.innerText = `${this.previousOperand} ${this.operation} ${this.currentOperand}`
        }
        else {
            this.previousOperandElement.innerText = ''
        }
    }
}
// DOM Elements
const numberBtns = document.querySelectorAll('[data-number]') // selects all number buttons
const operationBtns = document.querySelectorAll('[data-operation]') // selects all operators
const allClearBtn = document.querySelector('[data-all-clear]') // selects all clear button
const equalsBtn = document.querySelector('[data-equals]') // selects equals button
const previousOperandElement = document.querySelector('[data-previous]')
const currentOperandElement = document.querySelector('[data-current]')
const delBtn = document.querySelector('[data-delete]') // delete button
// Creating Calculator object
const calculator = new Calculator(previousOperandElement,currentOperandElement);

// Event listener for number buttons
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText)
        calculator.display()
    })
})

// Event listener for operation buttons
operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.display()
    })
})

// Event Listener for equals button
equalsBtn.addEventListener('click', () =>{
        calculator.compute()
        calculator.display()
})

// Mathematical functions
function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}
function oppositeSign(a) {
    return a * -1;

}
allClearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.display();
})

delBtn.addEventListener('click', () => {
    calculator.delete()
    calculator.display()
})