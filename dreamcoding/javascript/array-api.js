'use strict';
console.log('퀴즈 시작!')
// Q1. make a string out of an array { const fruits = ['apple', 'banana', 'orange']; }
{ 
    const fruits = ['apple', 'banana', 'orange']; 
    console.log(fruits.toString());
    const val=fruits.join(" and ");
    console.log(val);
}
// Q2. make an array out of a string { const fruits = '🍎, 🥝, 🍌, 🍒'; }
{ 
    const fruits = '🍎, 🥝, 🍌, 🍒'; 
    console.log(fruits.split(","));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] { const array = [1, 2, 3, 4, 5]; }
{ 
    const array = [1, 2, 3, 4, 5]; 
    array.sort((a,b)=>b-a);
    console.log(array);
}

// Q4. make new array without the first two elements { const array = [1, 2, 3, 4, 5]; } 
{ 
    const array = [1, 2, 3, 4, 5]; 
    const newArray=array.splice(2);
    console.log(newArray);
    const array2 = [1, 2, 3, 4, 5]; 
    const result=array2.slice(2,5);
    console.log(result);
} 
class Student {
     constructor(name, age, enrolled, score) {
          this.name = name; 
          this.age = age; 
          this.enrolled = enrolled; 
          this.score = score; 
        } 
    } 
    const students = [ new Student('A', 29, true, 45), new Student('B', 28, false, 80), new Student('C', 30, true, 90), new Student('D', 40, false, 66), new Student('E', 18, true, 88), ];
// class Student { constructor(name, age, enrolled, score) { this.name = name; this.age = age; this.enrolled = enrolled; this.score = score; } } const students = [ new Student('A', 29, true, 45), new Student('B', 28, false, 80), new Student('C', 30, true, 90), new Student('D', 40, false, 66), new Student('E', 18, true, 88), ];
// Q5. find a student with the score 90 { }
    {
        students.forEach((student,index)=>{
            if(student.score===90){
                console.log(student);
            }
        });

        const result=students.find(function(student,index){
            return student.score===90;
        });
        console.log(result);
}

// Q6. make an array of enrolled students { }
    {
        const result=students.filter((student)=>{
            return student.enrolled;
        })
        console.log(result);
    }
// Q7. make an array containing only the students' scores // result should be: [45, 80, 90, 66, 88] { }
    {
        const result=students.map((student)=>student.score);
        console.log(result);
    }
// Q8. check if there is a student with the score lower than 50 { }
    {
        const result=students.some((student)=>student.score<50);
        console.log(result);
        const result2=students.every((student)=>student.score>=50);
        console.log(!result2);
    }
// Q9. compute students' average score { }
    {
        const result=students.reduce((prev,curr)=>{
            console.log(prev);
            console.log(curr);
            console.log("==========");
            return curr;   
        })

        const result2=students.reduce((prev,curr)=>{
            return prev+curr.score;
        },0);
        console.log(result2/students.length);
    }
// Q10. make a string containing all the scores // result should be: '45, 80, 90, 66, 88' { } 
//-> 함수형 프로그래밍
    {
        const result=students
        .map((student)=>student.score)
        .filter(score=>score>=50)
        .join();

        console.log(result);
    }
// Bonus! do Q10 sorted in ascending order // result should be: '45, 66, 80, 88, 90' { }
    {
        const result=students
        .map((student)=>student.score)
        .sort((a,b)=>a-b)
        .join();
        console.log(result);
    }