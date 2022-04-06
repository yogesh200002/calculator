let firstValue;
let operator;
let nextValue;
const display = document.querySelector('.display')

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
