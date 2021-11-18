const images=[
    "pic01.jpeg",
    "pic02.jpeg",
    "pic03.jpeg",
    "pic04.jpeg",
    "pic05.jpeg"
]

randomNumber=Math.floor(Math.random()*images.length);
const chosenImage=images[randomNumber];
console.log(chosenImage);

//아무곳에도 없다 지금은
const bgImage=document.createElement("img");
//src추가
bgImage.src=`img/${chosenImage}`;
//body에 javascript로 만든 img 요소를 추가 해준다. body의 자식에 추가
document.body.appendChild(bgImage);
console.log(bgImage);