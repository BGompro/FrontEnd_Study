console.log("Promise 시작!!");

// 1.Producer
// 2.Consumer : then, catch, finally

// then (성공했을 때, resolve()를 통해 전달된다)
console.log('1. Producer');
// 기능을 비동기적으로 실행하는 Promise Object 생성
const promise=new Promise((resolve,reject)=>{
    //doing some heavy work() : 시간이 좀 걸리는 일들은 Promise 만들어 비동기적 처리하는 것이 좋다 ex) 네트워크 통신, 파일 읽는 것 등
    console.log("doing something...");//Promise가 만들어지는 순간 execute가 바로 실행된다. 
    setTimeout(()=>{
        //성공해서(2초 후) resolve callback함수를 통해 전달
        resolve('ellie');
    },2000);
});


console.log("2.Consumer : then, catch, finally");
//정상적으로 잘 수행이 된다면 그러면 then(값을 받아와서)
// catch함수를 이용하여 Error를 어떻게 처리할지 callback 함수 다룬다.
promise.then((value)=>{
    console.log(value);
});

// 
const promise2=new Promise((resolve,reject)=>{
    //doing some heavy work() : 시간이 좀 걸리는 일들은 Promise 만들어 비동기적 처리하는 것이 좋다 ex) 네트워크 통신, 파일 읽는 것 등
    console.log("doing something...");//Promise가 만들어지는 순간 execute가 바로 실행된다. 
    setTimeout(()=>{
        reject(new Error('No Network'));
    },2000);
});

//then 으로 값을 받은 결과 promise 객체의 reject에서 보내준 Error를 catch를 다시 호출함으로써 통해서
// 성공하든 실패하든 상관없이 finally
promise2
    .then((value)=>{
    console.log(value);
    })
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("마지막에 finally 수행 됨");
    });



console.log("3. Promise Chaining 연결하기");
const fetchNumber=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
    .then(num=>num*2)
    .then(num=>num*3)
    .then(num=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(num-1),1000);
        });
    })
    .then(num=>console.log(num));