'use strict';

console.log('async 시작!!');
console.log('비동기적인 실행 방법');
console.log('1');
//브라우저 api setTimeout호출 요청 -> 브라우저에서 1초지난 후 콜백함수 실행하라고 신호를 줌.
setTimeout(function(){
    console.log('2');
},1000);
console.log('3');
// Synchronous callback
// 매개변수가 어떤 함수인지는 모르지만 함수를 매개변수로 받아 호출 callback 함수
function printImmediately(print){
    print();
}
// 정의한 콜백함수에 arrow function을 이용하여 실행
printImmediately(()=>console.log('hello'));
// Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'),2000);

console.log('콜백 지옥 체험!!')
class UserStorage{
    // id와 pw를 받아와서 login이 성공했다면 onSuccess 콜백함수 호출, 실패했다면 onError 콜백함수 호출
    loginUser(id,password,onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password ==='dream') ||
                (id === 'coder' && password ==='academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not Found'));
            }
        },2000);
    }
    //사용자의 역할을 받아오는 함수
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user==='ellie'){
                onSuccess({name:'ellie',role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

//로그인 해보기-> 받아온 id를 가지고 ->역할 요청-> 사용자 object 출력
const userStorage=new UserStorage();
const id=prompt('enter your id');
const password=prompt('enter your password');
userStorage.loginUser(id,password, user=>{
    userStorage.getRoles(user,(userWithRole)=>{
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    },
    error=>{
        console.log(error);
    });
},
error=>{
    console.log(error);
});