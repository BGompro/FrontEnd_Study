console.log('operator.js 시작!');

console.log('1. string concatenation');
console.log('my'+'cat');
console.log('1'+2);
console.log(`string leiterals: 1+2=${1+2}`);

console.log("2. Numeric operators");
console.log(" + , -, /, *, %, **");

// preincrement, postincrement, predecrement, postdecrement
console.log("3. Increment and decrement");
let counter=2;
const preIncrement=++counter;
console.log(preIncrement);

console.log("4. Assignment operator");
console.log("+=, -=, *=, /=, **=");

console.log("5. Comparison operator, Equality");
console.log("<, <=, >, >=, !=, ==, ===");
console.log("Equality quiz!!!");
console.log(0==false); //true
console.log(0===false); //false
console.log(''==false); //true
console.log(''===false);//false
console.log(null==undefined);//true
console.log(null===undefined);//false

console.log("6. Logical operator");
console.log("||(or), &&(and), !(not)");
console.log("Heavy한 operation을 뒤쪽으로 보내는 게 효율적이다.")

console.log("7. Conditional Operator:if");
// if, else if, else
const name='df';
if(name=='ellie'){
    console.log('Welcome, Ellie');
}else if(name==='coder'){
    console.log('You are amazing coder!');
}else{
    console.log('unknown guy');
}

console.log("8. Ternary operator 3항 연산 Condition:A?B");
console.log(name==='ellie'?'yes':'no');

console.log("9. switch");
const browser='IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('Love you');
        break;
    default:
        console.log('same all');
        break;
}

console.log("10. Loops");
console.log("while");
let i=3;
while(i>0){
    console.log(`while:${i}`);
    i--;
}

console.log("do while");
do{
    console.log(`do while:${i}`);
    i--;
}while(i>0);

console.log("for");
console.log("for(begin; condition;step)");
for(let i=3;i>0;i-=2){
    console.log(`for : ${i}`);
}

// 연습
// 1.iterate from 0 to 10 and print only even numbers(use continue)
for (let index = 0; index <= 10; index++) {
    if(index%2==1)continue;
    console.log(index);
}
// 2.iterate from 0 to 10 and print only numbers until reaching 8(use break)
let n=0;
while(n<=8){
    console.log(n);
    n++;
}