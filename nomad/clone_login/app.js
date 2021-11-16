const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");

const link=document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault(); //stop default behavior(stop usually do)
    console.log(event);
    const username=loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit);


function handleLinkClick(event){
    alert("clicked");
    event.preventDefault();
    
}
link.addEventListener("click",handleLinkClick);