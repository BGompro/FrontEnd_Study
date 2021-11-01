'use strict';
console.log('배열 시작!!');
// Array
// 1. 배열 선언 
// - new Array();
// - [값,값,값]

const fruits=['사과','바나나'];
console.log(fruits);
console.log(fruits.length); //2
console.log(fruits[1]);

for (const fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(function(fruit,index,array){
    console.log(fruit, index, array);
})

fruits.forEach((fruit,index)=>console.log(fruit));

console.log("Addition, Deletion, Copy");
fruits.push('딸기','복숭아');
console.log(fruits);

//뒤어서 빼는 것
fruits.pop();
console.log(fruits);
//앞에서 데이터 넣는 것 unshift
fruits.unshift('레몬');
console.log(fruits);
//앞에서 부터 데이터를 빼는 것 shift
fruits.shift();
console.log(fruits);
// 원하는 값 제거, 갯수 지정하지않으면 시작인덱스부터 뒤로 싹다 제거
fruits.splice(1,2);
console.log(fruits);
// 배열 합치기
const fruits2=['메론','키위'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);

console.log('Searching');
console.log(newFruits.indexOf('메론'));
console.log(newFruits.includes('감자'));
console.log(newFruits.lastIndexOf('딸기'));