console.log("JSON 시작!!");

//1. Object to JSON (객체 안에있는 함수는 json으로 변환되자않는다) ==> JSON.stringify(obj)
console.log('1. Object to JSON');
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);

const rabbit={
    name:'tori',
    color:'white',
    size:null,
    birthDate:new Date(),
    jump:()=>{
        console.log(`${this.name} can jump!`);
    },
};
console.log(rabbit);
json=JSON.stringify(rabbit);
console.log(json);

//원하는 property만 설정해줄 수 있다.
json=JSON.stringify(rabbit,['name']);
console.log(json);
//콜백함수를 이용하여 통제해줄 수 있다
json=JSON.stringify(rabbit,(key,value)=>{
    console.log(`key:${key}, value:${value}`);
    return key==='name'?'ellie':value;
});
console.log(json);

//2. JSON to Object ==> JSON.parse(json)

const obj=JSON.parse(json);
console.log(obj);