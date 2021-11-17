const clock=document.querySelector("h2#clock");

// interval : 시간 간격으로 일어나는 것
//setInterval(callback,millisecond) : 두 개의 매개변수 받음. 1.실행할 callback함수 정의, 2.시간 간격 얼마나 두고 실행할지 밀리세컨드 단위
function sayHello(){
    console.log("Hello");
}
setInterval(sayHello,5000); //5초간격으로 sayHello함수를 실행한다.

// timeout : 한번만 실행하도록 한다 특정 시간 후에
//setTimeout(callback,millisecond) : 실행하고 싶은 함수 정의, 시간 정의
setTimeout(sayHello,3000);


// Date()
const date=new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getHours());
console.log(date.getDay());