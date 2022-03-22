class Calc{
    constructor(prevOperandTextElement,currOperandTextElement){
        
        this.prevOperandTextElement=prevOperandTextElement;
        this.currOperandTextElement=currOperandTextElement;
        this.clear();

    }

    clear(){
        this.prevOperand = '';
        this.currOperand = '';
        this.operation = undefined
    }
     delete(){

     }

     addNumberToScreen(number){
         if(number == '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString();
     }

     chooseOperation(operation){
        if(this.currOperand==='') return
        if(this.prevOperand !== ''){
            this.calculate()
        }
        this.operation = operation;
        this.prevOperand=this.currOperand;
        this.currOperand='';
     }

     calculate(){

     }

     display(){
        this.currOperandTextElement.innerText = this.currOperand
        this.prevOperandTextElement.innerText = this.prevOperand   
    }
}

const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const currOperandTextElement = document.querySelector('[data-curr-operand]');

const calc = new Calc(prevOperandTextElement,currOperandTextElement);


numButtons.forEach(button =>{
    button.addEventListener('click',()=> {
        calc.addNumberToScreen(button.innerText);
        
        calc.display();
    })
})

opButtons.forEach(button =>{
    button.addEventListener('click',()=> {
        calc.chooseOperation(button.innerText);
        
        calc.display();
    })
})