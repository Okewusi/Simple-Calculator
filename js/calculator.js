const nos = document.querySelectorAll('.no');
const clear = document.querySelector('.clear');
const symbols = document.querySelectorAll('.symbol');
const equal = document.querySelector('.equal');
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');
const resultDisplay = document.querySelector('.result');
let haveDot = false;
let result = null;
let display1Num = '';
let display2Num = '';
let lastOperation = '';


nos.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        display2Num += e.target.innerText;
        currentDisplay.innerText = e.target.innerText;
        previousDisplay.innerText = display2Num;
    })
});
symbols.forEach(symbol =>{
    symbol.addEventListener('click',(e) =>{
        if(!display2Num) result;
        haveDot= false;
        const symbolName = e.target.innerText;
        console.log(symbolName);
        if(display1Num && display2Num && lastOperation){
           mathOperation(); 
        }else{
            result = parseFloat(display2Num);
        }
        clearVar(symbolName);
        lastOperation = symbolName;
        console.log(result);
    })
})

function clearVar(name = ''){
    display2Num += display1Num+ ' ' + name + ' ';
    previousDisplay.innerText = display1Num;
    currentDisplay.innerText = '';
    display1Num = '';
    resultDisplay.innerText = result;
}

function mathOperation(){
    if(lastOperation === '*'){
        result = parseFloat(result) * parseFloat(display1Num);
        resultDisplay.innerText = result;
    }
}
// clear.addEventListener('click',()=>{
//     if(display1Num.length > 0 || display2Num.length > 0){
//         display2Num = 0;
//         display1Num = 0;
//         currentDisplay.innerText = display2Num;
//         previousDisplay.innerText = display2Num;
//     }
// })