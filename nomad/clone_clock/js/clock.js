const clock=document.querySelector("h2#clock");

// interval : 시간 간격으로 일어나는 것
//setInterval(callback,millisecond) : 두 개의 매개변수 받음. 1.실행할 callback함수 정의, 2.시간 간격 얼마나 두고 실행할지 밀리세컨드 단위
// timeout : 한번만 실행하도록 한다 특정 시간 후에
//setTimeout(callback,millisecond) : 실행하고 싶은 함수 정의, 시간 정의
function getClock(){
    const date=new Date();
    //숫자 한자리로 나오는 것을 두자리로 표현하기 위하여 padStart() 함수를 이용
    const hour=date.getHours().toString().padStart(2,"0");
    const minute=date.getMinutes().toString().padStart(2,"0");
    const second=date.getSeconds().toString().padStart(2,"0");
    clock.innerText=`${hour}:${minute}:${second}`;
}
getClock(); //시작하자마자 시간 얻는 함수 호출 한 후에 아래의 
setInterval(getClock,1000); //1초간격으로 getClock함수를 호출한다.





// Date()
const date=new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getHours());
console.log(date.getDay());