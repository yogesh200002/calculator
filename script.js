let firstValue;
let operend;
let nextValue;
let displayValue = '';
const allClearButton = document.querySelector('.ac')
const display = document.querySelector('.display')
const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator')

console.log(digits)
digits.forEach((digit) => {
    digit.addEventListener('click',()=>{
        displayDigit(digit.outerText)
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', (e)=> {
        operend = operator.innerText
        if(!firstValue){
            firstValue = displayValue
            displayValue = ''
        }
        else if(firstValue && nextValue){
            display.textContent = operate(firstValue,operend,nextValue)
            firstValue = nextValue
            nextValue = ''
        }
        else{
            nextValue = displayValue
            displayValue = ''
        }
        console.log(operend,firstValue,nextValue)
    })
})

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a-b
}

function operate(a,o,b){
    if(o == '+'){
        add(a,b)
    }
    else if(o == '-'){
        subtract(a,b)
    }
    else if(o == '/'){
        divide(a,b)
    }
    else{
        multiply(a,b)
    }
}

allClearButton.addEventListener('click',() => {
    displayValue = ''
    display.textContent = displayValue
})

function displayDigit(element){
    displayValue += `${element}`
    display.textContent = displayValue
}