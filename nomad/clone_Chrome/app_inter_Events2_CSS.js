//Events ex) click, mouseOver, press Enter, connect wifi ...
// HTMLElement.addEventListener("event",handlefunction) <->removeEventListener
// HTMLElement.on이벤트("이벤트",핸들러함수)

//style change javascript : animation style=CSS
//step1. find the element(HTML) 
//step2. make handler function-> action
//step3. use addEventListener()
//CSS1
const header=document.querySelector('h1');
header.style.color='blue';

function handleTitleClick(){
    const currentColor=this.style.color;
    let newColor;
    if(currentColor==='blue'){
        newColor='tomato';
    }else{
        newColor='blue';
    }
    this.style.color=newColor;
}

header.addEventListener("click",handleTitleClick);

//CSS2
//CSS 클래스에 스타일 넣어두고 class이름 넣어주면서 효과 같이 주기 ex) .active 
//className이용
const text=document.querySelector('h4');

function handleTextClick(){
    const nameOfClass=this.className
    if(nameOfClass==='active'){
        this.className='';
    }else{
        this.className='active';
    }
}

text.addEventListener("click",handleTextClick);

// classList 이용하여 contains(클래스이름), remove(클래스이름), add(클래스이름)
// 복합 클래스 이름을 가지고 있을 때 사용하면 유용하다. classList
const sexyText=document.querySelector('h3');

function handleSexyTextClick(){
    const clickedClass="clicked";
    if(sexyText.classList.contains(clickedClass)){
        sexyText.classList.remove(clickedClass)
    }else{
        sexyText.classList.add(clickedClass);
    }
}

sexyText.addEventListener("click",handleSexyTextClick);

const sexyText2=document.querySelector('h5');
//contains 이용해서 확인한담에 add, remove 대신 toggle함수를 이용하여 있으면 없애고 없으면 있게 만들어 준다
function handleSexyTextClickWithToggle(){
    sexyText2.classList.toggle("clicked");
}

sexyText2.addEventListener("click",handleSexyTextClickWithToggle);
