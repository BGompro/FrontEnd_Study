// 1. use strict
'use strict';
console.log('Hello World');

// 2. Variable
// let(in ES6) 
{
    let name='bgom';
    console.log(name);
    name='hello';
    console.log(name);
}

// global 변수 : 애플리케이션이 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재되어있어 최소한으로 사용하는 것이 좋다.
// 변수 선언 let
// why don't use var : 선언하기 전에 값을 할당 or 값을 할당하기전에 출력(undefined)가 가능. 
// 1. var hoisting(선언한 것에 상관없이 파일 제일 위로 선언을 끌어올려준다.) 2. var는 블록 scope이 없다. 블록안에서 선언하고 밖에서 출력할 수 있는 문제.
// 변수 선언 const
const daysInWeek=7;
const maxNumber=5;

// 변수 타입
// primitive type : single item으로 number, string, boolean, undefined, symbol
// object type : 싱글 아이템들을 여러개 묶어서 box container로 관리
// function type : first-class function 변수, 인자, return 타입으로 function을 사용가능하다.

// number
const count=17;
const size=17.1;
console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

const infinity=1/0;
const negativeInfinity=-1/0;
const nAn='숫자아님'/2;
console.log(infinity)
console.log(negativeInfinity);
console.log(nAn);

// string
const char='c';
const brendan='brendan';
const greeting='hello '+brendan;
console.log(`value: ${greeting}, type:${typeof greeting}`);
const helloBob=`hi ${brendan}!`;

// boolean
// false : 0, null, undefined, NaN, ''
const canRead=true;
const test=3<1; //false
console.log(`value:${canRead} type:${typeof canRead}`);
console.log(`value:${test} type:${typeof test}`);


// symbol : 동일한 스트링으로 만들어도 다르다. 서로 다른 식별자
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1==symbol2)

// 같은 식별자로 만들고 싶을 때는 Symbol.for('값');
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1==gSymbol2)

// 값을 출력시에는 symbol1.description을 이용하여 출력
console.log(`value:${symbol1.description} type:${typeof symbol1}`)

// object
const bgom={name:'bgom',age:20};
console.log(bgom);