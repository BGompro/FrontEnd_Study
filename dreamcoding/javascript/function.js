console.log('0. 함수 시작!!! function 기본')
function log(message){
    console.log(message);
}

// 매개변수
log("Hello");

// default 매개변수
function showMessage(message,from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

// rest parameters : 배열 형태로
// 배열 for, for of
function printAll(...args){
    for (let index = 0; index < args.length; index++) {
        console.log(args[index]);
    }

    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream','coding','fighting');

// return 설정, 안할시 undefined
function add(num1, num2){
    return num1+num2;
}
console.log(add(1,2));

console.log("1. function expression 시작!!!");

const print=function(){
    console.log('print');
};
print();
const printAgain=print;
printAgain();
const sumAgain=add;
console.log(sumAgain(1,3));

console.log("2. Callback function using function expression");
const printYes=function(){
    console.log('Yes');
}
const printNo=function(){
    console,log('No');
}
function randomQuiz(answer,printYes,printNo){
    if(answer==='love you'){
        printYes();
    }else{
        printNo();
    }
}
randomQuiz('love you',printYes,printNo);
randomQuiz('ayo',printYes,printNo);

console.log('Arrow function(always anonymous)');
const simplePrint= () => console.log('simplePrint');
const sum=(a,b)=>a+b;


console.log('Quiz');
const calculate=function(command,a,b){
    let result;
    if(command==='add'){
        console.log(`${command} 실행`);
        result=a+b;
    }else if(command==='substract'){
        console.log(`${command} 실행`);
        result=a-b;
    }else if(command==='divide'){
        console.log(`${command} 실행`);
        result=a/b;
    }else if(command==='multiply'){
        console.log(`${command} 실행`);
        result=a*b;
    }else if(command==='remainder'){
        console.log(`${command} 실행`);
        result=a%b;
    }
    return result;
}

console.log(calculate('add',1,2));
console.log(calculate('substract',1,2));
console.log(calculate('divide',1,2));
console.log(calculate('multiply',1,2));
console.log(calculate('remainder',1,2));
