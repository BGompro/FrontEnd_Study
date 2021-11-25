
const body = document.body;
console.log(body);

function changeBgColor(){
    const intViewportWidth = window.innerWidth;
    console.log("이벤트 핸들러 함수 호출")
    let bGColor;
    if(intViewportWidth<300){
        bGColor="blue";
    }else if(intViewportWidth<600){
        bGColor="purple";
    }else if(intViewportWidth<900){
        bGColor="yellow";
    }else{
        bGColor="red";
    }
    body.style.backgroundColor=bGColor;
}
window.addEventListener("resize",changeBgColor);