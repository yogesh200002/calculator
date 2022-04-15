let firstValue;
let operend;
let nextValue;
let displayValue = '';
let result;
const allClearButton = document.querySelector('.ac')
const clear = document.querySelector('.c')
const displayCalculation = document.querySelector('.calculation')
const displayResult = document.querySelector('.result')
const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('#equals')
const dotButton = document.querySelector('.dot')

digits.forEach((digit) => {
    digit.addEventListener('click',()=>{
        if(displayResult.textContent == 0){
            displayResult.textContent = ''
        }
        appendDigit(digit.outerText)
        displayScreen()
    })
})

function operatorKeys(e){
    if(!firstValue){
        firstValue = displayValue
        operend = e.key
        displayValue = ''
    }
    else{
        evaluate()
        displayValue = ''
        operend = e.key
    }
}

operators.forEach((operator) => {
    operator.addEventListener('click', ()=> {
        if(!firstValue){
            firstValue = displayValue
            operend = operator.innerText
            displayCalculationScreen()
            displayValue = ''
        }
        else{
            evaluate()
            displayValue = ''
            operend = operator.innerText
            displayCalculationScreen()
        }
    })
})

function add(a,b){
    a = Number(`${a}`)
    b = Number(`${b}`)
    if(Number.isInteger(a) && Number.isInteger(b)){
        result = parseInt(a)+parseInt(b)
        return(result)
    }
    else{
        result = parseFloat(a)+parseFloat(b)
        return(result.toFixed(2))
    }
}

function subtract(a,b){
    result = a - b
    if(!Number.isInteger(result)){
        return result.toFixed(2)
    }
    else{
        return(result)
    }
}

function multiply(a,b){
    result = a*b
    if(!Number.isInteger(result)){
        return result.toFixed(2)
    }
    else{
        return(result)
    }
}

function divide(a,b){
    result = a / b
    if(!Number.isInteger(result)){
        return result.toFixed(2)
    }
    else{
        return(result)
    }
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
    else if(o == '*'){
        return multiply(a,b)
    }
    else{
        return;
    }
}

function backSpace(){
    displayValue = displayValue.slice(0,-1)
    displayScreen()
    if(displayValue.length == 0){
        return;
    }
}   

clear.addEventListener('click',backSpace)

allClearButton.addEventListener('click',() => {
    displayValue = '0'
    firstValue = null
    nextValue = null
    displayResult.textContent = displayValue
    displayCalculation.textContent = ''
})

function appendDigit(element){
    if(displayValue[0] == 0){
        displayValue = ''
    }
    displayValue += `${element}`
}


function enter(){
    if(!firstValue){
        return;
    }
    else{
        evaluate()
        firstValue = null
    }
}

equal.addEventListener('click', enter)

function displayScreen(){
    displayResult.textContent = displayValue
}

function displayCalculationScreen(){
    displayCalculation.textContent = `${firstValue}`+' '+`${operend}`
}

function evaluate(){
    if(!nextValue){
        nextValue = displayValue
        displayValue = operate(firstValue,operend,nextValue)
        displayCalculation.textContent = `${firstValue}`+' '+`${operend}`+' '+`${nextValue}`+' '+'='+' '
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
    else if(e.key == '.'){
        dot()
    }
    else if(e.key == 'Backspace'){
        backSpace()
    }
    else if(e.key == 'Enter'){
        enter()
    }
    else if(e.key == '*' || e.key == '-' || e.key == '+' || e.key == '/' ){
        operatorKeys(e)
    }
    else{
        return;
    }
})

function dot(){
    if(!displayValue.includes('.')){
        appendDigit('.')
        displayScreen()
    }
    else{
        return;
    }
}

dotButton.addEventListener('click',dot)