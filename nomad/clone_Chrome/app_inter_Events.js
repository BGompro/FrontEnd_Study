//style change
const header=document.querySelector('h1');
header.style.color='blue';

function handleTitleClick(){
    console.log("title was clicked");
    this.style.background='pink';
}
//Events ex) click, mouseOver, press Enter, connect wifi ...
// HTMLElement.addEventListener("event",handlefunction) <->removeEventListener
// HTMLElement.on이벤트("이벤트",핸들러함수)
function handleMouseEnter(e){
    console.log('mouse is here');
    header.innerText='Mouse is Here';
}
function handleMouseLeave(){
    console.log('mouse is gone');
    this.innerText='Mouse is Gone';
}
function handleWindowResize(){
    console.log("window 창 바꾸는 중");
    document.body.style.backgroundColor='yellow';
}
function handleWindowCopy(){
    alert('copier');
}
function handleWindowOffline(){
    alert('SOS no wifi');
}
function handleWindowOnline(){
    alert('Good wifi connected')
}
header.addEventListener("click",handleTitleClick);
header.addEventListener("mouseenter",handleMouseEnter);
header.addEventListener("mouseleave",handleMouseLeave);
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);

//HTMLHeadingElements Web-apis