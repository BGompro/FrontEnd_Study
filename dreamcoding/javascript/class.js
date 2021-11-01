'use strict';
console.log("class 공부 시작!!");

// 클래스 : Template -> 클래스를 이용하여 실제 데이터를 넣어서 만든 것 Object
class Person{
    //constructor생성 중 field 값 name, age 선언
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!!`);
    }

}
const hw=new Person('bGom',20);
console.log(hw);
hw.speak();


console.log("Setter Getter");
class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        // if(value<0){
        //     throw Error('age can not be negative');
        // }
        this._age=value<0?0:value;
    }
}
const user1=new User('Steve','Jobs',-1);
console.log(user1);
//사람의 나이가 -1이 되는것이 말이 되지 않는다.

console.log('Fields (public, private)');
class Experiment{
    publicField=2;
    #privateField=0;
}
const experiment=new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined 클래스안에서만 접근 수정 가능

console.log('static!!');
// static 오브젝트에 상관없이 클래스에 연결되어있다. 클래스 자체에 붙어있다.
class Article{
    static publisher='Dream coding';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1=new Article(1);
const article2=new Article(2);
console.log(article1.publisher); //undefined static은 class자체에 붙어있어서
console.log(Article.publisher);
Article.printPublisher();

console.log('상속 extends 하여 도형 넓이 구하기 구현');
class Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width*this.height;
    }
}
class Rectangle extends Shape{
    draw(){
        super.draw();
        console.log('이것은 직사각형');
    }
}
class Triangle extends Shape{
    getArea(){
        return super.getArea()/2;
    }
}

const rectangle=new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle=new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

console.log('instanceOf');
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Object);
console.log(rectangle instanceof Shape);