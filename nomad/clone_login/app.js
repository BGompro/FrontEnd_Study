const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");


function onLoginSubmit(event){
    event.preventDefault(); //stop default behavior(stop usually do)
    console.log(event);
    const username=loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit);

