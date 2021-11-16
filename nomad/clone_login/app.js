const loginInput=document.querySelector("#login-form input");
const loginButton=document.querySelector("#login-form button");

// function handleLoginBtnClick(){
//     console.log("click!!");
//     console.dir(loginInput.value);
// }
loginButton.addEventListener("click",()=>{
    const username=loginInput.value;

    if(username===""){
        alert("please write your name");
    }else if(username.length>15){
        alert("Your name is too long.")
    }else{
        console.log(username);
    }
    
});

