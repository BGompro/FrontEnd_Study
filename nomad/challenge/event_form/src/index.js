const gameForm=document.querySelector("#game-form");
const givenNumber=document.querySelector("#givenNumber");
const chosenNumber=document.querySelector("#chosenNumber");
const resultForm=document.querySelector("#result");
function generateRandomNumber(num){
    return Math.round(Math.random()*(parseInt(num)));
}

function submitEventHandler(event){
    event.preventDefault();
    const randomNumber=generateRandomNumber(givenNumber.value);
    const myNumber=parseInt(chosenNumber.value);
    let resultYn='lost';
    if(randomNumber===myNumber){
        resultYn='Win';
    }
    const result=`You chose ${myNumber}, the machine chose: ${randomNumber}<br> <strong>You ${resultYn}</strong>`;
    resultForm.innerHTML=result;
}

gameForm.addEventListener("submit",submitEventHandler);