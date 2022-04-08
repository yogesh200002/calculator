let firstValue;
let operend;
let nextValue;
let displayValue = '';
const allClearButton = document.querySelector('.ac')
const display = document.querySelector('.display')
const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('#equals')

digits.forEach((digit) => {
    digit.addEventListener('click',()=>{
        appendDigit(digit.outerText)
        displayScreen()
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', ()=> {
        operend = operator.innerText
        if(firstValue && nextValue){
            equals()
            displayValue = ''
        }
        else if(!firstValue){
            firstValue = displayValue
            displayValue = ''
            }
        else{
            nextValue = displayValue
            firstValue = operate(firstValue,operend,nextValue)
            displayValue = firstValue
            displayScreen()
            displayValue = ''
        }
        console.log(firstValue,operend,nextValue)
    })
})

function add(a,b){
    console.log(a+b)
    return a+b
}

function subtract(a,b){
    console.log(a-b)
    return a-b
}

function multiply(a,b){
    console.log(a*b)
    return a*b
}

function divide(a,b){
    console.log(a/b)
    return a/b
}

function operate(a,o,b){
    if(o == '+'){
        return add(a,b)
    }
    else if(o == '-'){
        return subtract(a,b)
    }
    else if(o == '/'){
        return divide(a,b)
    }
    else{
        return multiply(a,b)
    }
}

allClearButton.addEventListener('click',() => {
    displayValue = ''
    firstValue = ''
    nextValue = ''
    display.textContent = displayValue
})

function appendDigit(element){
    displayValue += `${element}`
}

equal.addEventListener('click', () => {
    if(!firstValue){
        return;
    }
    else{
        nextValue = displayValue
        displayValue = operate(firstValue,operend,nextValue)
        displayScreen()
        firstValue = null
        nextValue = null
    }
})

function displayScreen(){
    display.textContent = displayValue
}

function equals(){
    nextValue = displayValue
    displayValue = operate(firstValue,operend,nextValue)
    displayScreen()
    firstValue = displayValue
    nextValue = null
}