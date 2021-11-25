const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
function changeBgColorGradient(){
    console.log("랜덤하게 Gradient 하기");
    const firstColor=colors[Math.floor(Math.random()*colors.length)];
    let secondColor=colors[Math.floor(Math.random()*colors.length)];
    while(true){
        if(firstColor!==secondColor)break;
        secondColor=colors[Math.floor(Math.random()*colors.length)];
    }
    console.log(firstColor,secondColor);
    const body=document.querySelector("body");
    body.style.background=`linear-gradient(to right, ${firstColor},${secondColor})`;
}

  const btn = document.querySelector("button");
  btn.addEventListener("click",changeBgColorGradient);