'use strict';
//Objects 
// one of the javascript's data type
// a collection of related data and/or functionality.
// Nearly all objects in javascript are instances of object
console.log("object 시작!!!");
console.log('1. Listerals and properties');
const per1={name:'ellie',age:4};
console.log(per1);
per1.hasJob=true;
console.log(per1);
delete per1.hasJob;
console.log(per1);

console.log('2. Computed properties');
per1['hasJob']=true;
console.log(per1.hasJob);

console.log('3. Property value shorthand and Constructor Function');
function Man(name,age){
    this.name=name;
    this.age=age;
}
//위와 같이 함수를 선언한 후 new 함수명(값,값)으로 하면 javascript 객체로 생성된다. 
//일일이 key:값 계속 안써줘도된다.
const man1={name:'bob',age:2};
const man2=new Man('ellie',30);
console.log(man1);
console.log(man2);

console.log('4. in operator :  해당 object에 키가 있는지 없는지 확인 (true, false)');
console.log('name' in man1);
console.log('birth' in man2);

console.log("5. for .. in vs for .. of");

for(const key in man2){
    console.log(key);
    console.log(man1[key]);
}

const arr=[1,2,4,5];
for (const n of arr) {
    console.log(n);
}


console.log('6. cloning');
const p1={name:'ellie',age:20};
const p2=p1;
p2.name='coder';
console.log(p1);

//1. 수동적으로 for문돌면서 옮기는 방법
//2. Object.assign
const p3={}
Object.assign(p3,p1);
console.log(p3);
