// async & await
console.log('0. Promise 복습!');

// 사용자의 데이터를 네트워크 통신을 통해 백앤드에서 받아오는데 10초정도 걸리는 코드가 있다고 가정하고
// 10초 후에 우리가 받아온 값을 return 하는 함수
// 이 함수를 호출하고 출력을 하게되면 비동기적인 처리를 하지 않으면 동기적으로 자바스크립트는 처리를 하기 때문에 
// 이 함수를 수행하고 10초가 끝날때까지 머물러 있다가 그 다음 줄이 실행되는 문제가 될 것이다. 
// 끝나는 동안 뒤의 코드가 실행하지 않는 일과 같은 상황을 막기 위해 비동기적으로 처리를 해주어야한다.
// Promise로 만들어서 then 콜백함수를 등록해놓으면 함수가 다 되는대로 then함수를 통해 실행해주겠다.
function fetchUser(){
    return new Promise((resolve,reject)=>{
        resolve('ellie');
    });
}

const user=fetchUser();
user.then(console.log);
console.log(user);

// 위처럼 Promise를 사용하지 않고 비동기를 처리하는 방법

console.log("1. async 시작!");
//함수 앞에 async를 사용하면 된다.

async function fetchUser2(){
    return new Promise((resolve,reject)=>{
        resolve('ellie');
    });
}

const user2=fetchUser2();
user2.then(console.log);
console.log(user2);


console.log("2. await 시작!!");
//await은 async 함수안에서만 사용 가능하다.
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

//한번에 과일을 다 가져오는 함수
// callback 지옥
function pickFruits(){
    return getApple().then(apple=>{
            return getBanana().then(banana=>`${apple}+${banana}`);
    });
}
//async await이용
async function pickFruits2(){
    const apple=await getApple();
    const banana=await getBanana();
    return `${apple}+${banana}`;
}
pickFruits().then(console.log);
pickFruits2().then(console.log);

// 서로 연관이 없는 것을 비동기 처리할 때 사용하면 유용한 Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
        .then(fruits=>fruits.join(' + '));
}

pickAllFruits().then(console.log);

//제일 먼저 들어오는 값 하나만 return 하도록하는 
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()])
}

pickOnlyOne().then(console.log)
