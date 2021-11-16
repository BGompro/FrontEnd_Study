const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");

const link=document.querySelector("a");
const greeting=document.querySelector("#greeting")

const HIDDEN_CLASSNAME="hidden";

function onLoginSubmit(event){
    event.preventDefault(); //stop default behavior(stop usually do)
    console.log(event);
    const username=loginInput.value;
    console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);


function handleLinkClick(event){
    alert("clicked");
    event.preventDefault();
    
}
link.addEventListener("click",handleLinkClick);