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
       this.currOperand = this.currOperand.toString().slice(0,-1)
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
        let computation
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.currOperand)
        if(isNaN( prev)||isNaN(curr)) return
        switch(this.operation){
            case '+' :
                computation = prev + curr
                break
            case '-' :
                computation = prev - curr
                break
            case '*' :
                computation = prev * curr
                break
             case '/' :
                computation = prev / curr
                break
            default:
                return
        }

        this.currOperand = computation
        this.operation = undefined
        this.prevOperand = ''
    }

     display(){
        this.currOperandTextElement.innerText = this.currOperand
        if(this.operation != null){
            this.prevOperandTextElement.innerText = `${this.prevOperand} ${this.operation}`
        }
        else{
            this.prevOperandTextElement.innerText = ''
        }
        //this.prevOperandTextElement.innerText = this.prevOperand   
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

equalsButton.addEventListener('click', ()=>{
    calc.calculate()
    calc.display()
})

allClearButton.addEventListener('click', ()=>{
    calc.clear()
    calc.display()
})

deleteButton.addEventListener('click', ()=>{
    calc.delete()
    calc.display()
})