//we can access document object with javascript
//in details, get, set the content
console.log(document);
console.dir(document);
console.log(document.title);

//document.getElementById("id값");
console.log(document.getElementById("title"));
const title=document.getElementById("title");
title.innerHTML='Got you!';

//document.getElementsByClassName("클래스이름");
const hellos=document.getElementsByClassName("hello");
console.log(hellos);

//document.querySelector("css선택자"); -하나만 (첫번째 element)
const select=document.querySelector("div>h4");
console.log(select);

//document.querySecectorAll("css선택자"); -다중셀렉터
const selects=document.querySelectorAll(".hello");
console.log(selects);