// data type
// Number : Integer, Float 포함
// String : text
// Boolean : true, false(undefined, null, "", 0, NaN)
// null, undefined
// 변수 const : unchangeable variable, let : changeable variable
// python : snake_case, java&javascript : camelCase recommendation

let myName='Hyunwoo';
const myBirth="11/29";
console.log("My name is "+myName);
myName='Leo';
console.log("My new name is "+myName);
console.log("My birthday is "+myBirth);

//array [] square bracket, separtated with ,
//push('val') : add value(end),  
//ex) days of week
const daysOfWeek=['Mon','Tue','Wed','Thur','Fri','Sat'];
console.log(daysOfWeek)
daysOfWeek.push('Sun');
console.log(daysOfWeek);

//Object (entity) 
//{} curly bracket key:value -we can know property
//read object property -> object.key or object["key"]
//add or update -> object.newkey=value
const player={
    name:"nico",
    points:10,
    fat:true,
};
console.log(player);
console.log(player.name);
console.log(player.points);
console.log(player.fat);
player.fat=false;
console.log(player["name"]);
console.log(player)

//function : programmer is lazy -> they make function
function sayHello(name){
    console.log(`Hello! ${name}`)
}

sayHello("UHyeon");
sayHello("HoYoung");
sayHello("SungHyup");

//Object with function
const player2={
    name:"Hyunwoo",
    sayHello:function(otherPersonName){
        console.log(`Hello ${otherPersonName}~ my name is ${this.name}`);
    },
};

player2.sayHello("Lynn");
