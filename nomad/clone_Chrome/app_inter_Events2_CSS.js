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

const sexyText=document.querySelector('h3');

function handleSexyTextClick(){
    const nameOfClass="clicked";
    if(sexyText.classList.contains(nameOfClass)){
        sexyText.classList.remove(nameOfClass)
    }else{
        sexyText.classList.add(nameOfClass);
    }
}

sexyText.addEventListener("click",handleSexyTextClick);
