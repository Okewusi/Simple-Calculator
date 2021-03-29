let sum = function() {
    let firstNo = +prompt('enter a no please');
    let secondNo = +prompt('enter another no');
    console.log(firstNo + secondNo)
}
function random(min,max){
    console.log((min + Math.random() * (max-min)).toFixed())
}

function checkSpam(str){
    let lower = str.toLowerCase();
    return lower.includes('viagra') || lower.includes('xxx');
}
function truncate(str, maxlength){
    if(str.length >= maxlength){
        return `${str.slice(0,maxlength-1)}...`
    }else{
        return str
    }
}
function extractCurrencyValue(str) {
    return +str.slice(1);
}
// styles = ['Jazz','Blues'];
// styles.push('Rock-n-Roll');
// let no = styles.length % 2 == 0?  styles.length/2 : ((styles.length/2)-0.5);
// styles[no] = 'Classics';
// styles.shift();
// styles.unshift('Rag','Reggae');
// console.log(styles);
// function sumInput(){
//     let array = [];
//     while (true){
//         let input = +prompt('enter a no');
//         if(typeof (input) != Number) break;
//         array.push(input);
//     }
//     let sum = array.reduce((a,b) => a+b)
//     return sum; 
// }
// console.log(sumInput());
let array = [
    [2,4,5],
    [3,6,70,8,90],
    [3,45,67,8]
]
let check = array.filter((item) =>{
    let long = item.length > 4;
    return long;
});
let checkArrays = array.some((data) =>{
    return data.length === 10;
})
let checkEvery = array.every((data) =>{
    return data.length > 2;
});
let sorting = array[1].sort((a,b) =>{
    return a-b;
});
console.log(sorting);

