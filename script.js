let firstValue;
let operend;
let nextValue;
let tempDisplay = ''
let displayValue = '';
const allClearButton = document.querySelector('.ac')
const clear = document.querySelector('.c')
const display = document.querySelector('.display')
const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('#equals')

digits.forEach((digit) => {
    digit.addEventListener('click',()=>{
        if(display.textContent == 0){
            display.textContent = ''
        }
        appendDigit(digit.outerText)
        displayScreen()
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', ()=> {
        if(!firstValue){
            firstValue = displayValue
            operend = operator.innerText
            displayValue = ''
        }
        else{
            evaluate()
            displayValue = ''
            operend = operator.innerText
        }
    })
})

function add(a,b){
    return (a+b).toFixed(2)
}

function subtract(a,b){
    return (a-b).toFixed(2)
}

function multiply(a,b){
    return (a*b).toFixed(2)
}

function divide(a,b){
    return (a/b).toFixed(2)
}

function operate(a,o,b){
    if(o == '+'){
        return add(parseInt(a),parseInt(b))
    }
    else if(o == '-'){
        return subtract(parseInt(a),parseInt(b))
    }
    else if(o == '/'){
        return divide(parseInt(a),parseInt(b))
    }
    else if(o == '*'){
        return multiply(parseInt(a),parseInt(b))
    }
    else{
        return;
    }
}

clear.addEventListener('click', () => {
    displayValue = displayValue.slice(0,-1)
    displayScreen()
    if(displayValue.length == 0){
        return;
    }
})

allClearButton.addEventListener('click',() => {
    displayValue = '0'
    firstValue = null
    nextValue = null
    display.textContent = displayValue
})

function appendDigit(element){
    if(displayValue[0] == 0){
        displayValue = ''
    }
    displayValue += `${element}`
}

equal.addEventListener('click', () => {
    if(!firstValue){
        return;
    }
    else{
        evaluate()
        firstValue = null
    }
})

function displayScreen(){
    display.textContent = displayValue
}

function evaluate(){
    if(!nextValue){
        nextValue = displayValue
        displayValue = operate(firstValue,operend,nextValue)
        displayScreen()
        firstValue = displayValue
        nextValue = null
    }
}

window.addEventListener('keydown', (e)=> {
    if(e.key >= 0 && e.key <= 9){
        appendDigit(e.key)
        displayScreen()
    }
})