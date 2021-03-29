const displayOneElement = document.querySelector('.display-1');
const displayTwoElement = document.querySelector('.display-2');
const tempResultElement = document.querySelector('.temp-result');
const numbersElement = document.querySelectorAll('.number');
const operationsElement = document.querySelectorAll('.operation');
const equalElement = document.querySelector('.equal');
const clearAllElements = document.querySelector('.all-clear');
const clearLastElement = document.querySelector('.last-entity-clear');

let display1Num = '';
let display2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;


// this will show the numbers on the screen as you select and also making sure you can only select one dot at a time
numbersElement.forEach(number =>{
    number.addEventListener('click', (e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        display2Num += e.target.innerText;
        displayTwoElement.innerText =display2Num;
    })
})

// This displays the operation clicked on the screen, makes sure you can not perfom an operation except there is a number to perform the operation on else it displays the current number  on screen as the result
operationsElement.forEach(operation =>{
    operation.addEventListener('click',(e)=>{
        if(!display2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(display1Num && display2Num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(display2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

// This clears the current display and moves it to the history, it also makes sure the operation result is showing on the screen
const clearVar = (name = '')=>{
    display1Num += display2Num + ' ' + name + ' ';
    displayOneElement.innerText = display1Num;
    displayTwoElement.innerText = '';
    display2Num = '';
    tempResultElement.innerText = result;
}

// This performs the maths operations and displays it on the screen
const mathOperation =() =>{
    if(lastOperation === 'X'){
        result = parseFloat(result) *parseFloat(display2Num);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(display2Num);
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(display2Num);
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(display2Num);
    }else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(display2Num);
    }
}


// This works on the fuctionality of the equal to sign
equalElement.addEventListener('click',(e)=>{
    if(!display2Num || !display1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayTwoElement.innerText = result;
    tempResultElement.innerText = '';
    display2Num = result;
    display1Num ='';
})

// This works with the clear screen
clearAllElements.addEventListener('click',()=>{
    displayTwoElement.innerText = '0';
    displayOneElement.innerText ='0';
    tempResultElement.innerText = '0'
    display1Num = '';
    display2Num = '';
    result = ''
})


// This helps remove the last no on the display
clearLastElement.addEventListener('click',(e)=>{
   let rem =display2Num.split('');
   rem.pop();
   display2Num = rem.join('');
   displayTwoElement.innerText = display2Num;
})


// This makes sure the keypad can be used with the calculator
window.addEventListener('keydown',(e)=>{
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    if(e.key in numbers || e.key === '.') {
        clickButtonElement(e.key);
    }else if(e.key ==='+' ||
    e.key === '/' ||
    e.key === '-' ||
    e.key === '%' ){
        clickOperation(e.key);
    }else if(e.key === '*'){
        clickOperation('X');
    }else if(e.key === '=' || e.key === 'Enter'){
        equalElement.click();
    }
})

const clickButtonElement =(key)=>{
    numbersElement.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}

const clickOperation =(key) =>{
    operationsElement.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}

