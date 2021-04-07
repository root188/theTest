class calculator {
    constructor( upTextElement, downTextElement) {
        this.upTextElement = upTextElement
        this.downTextElement = downTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operatin = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.downTextElement = number 
    }

    chooseOperation(operation) {

    }

    comput() {

    }

    updateDisplay() {
        this.downTextElement.innerText = currentOperand
    }

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const upTextElement = document.querySelector('[data-up]')
const downTextElement = document.querySelector('[data-down]')


const calculator = new Calculator(upTextElement, downTextElement)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})