class Calc{
    constructor(prevOperand,currOperand){
        this.prevOperand=prevOperand;
        this.currOperand=currOperand;
    }
}

const numButtons = document.querySelectorAll(['data-number']);
const opButtons = document.querySelectorAll(['data-operations']);
const equalsButton = document.querySelector(['data-equals']);
const deleteButton = document.querySelector(['data-delete']);
const allClearButton = document.querySelector(['data-all-clear']);
const prevOperand = document.querySelector('[data-prev-operand]');
const currOperand = document.querySelector('[data-curr-operand]');


