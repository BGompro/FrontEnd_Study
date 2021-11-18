const quotes=[
    {
        quote:"The way to get start is to just start",
        author:"Hyunwoo Park",
    },
    {
        quote:"Never give up until ends",
        author:"Hyunwoo Park",
    },
    {
        quote:"Just Do it ",
        author:"Nike",
    },
    {
        quote:"Don't forget code your dream~",
        author:"dreamcoding",
    },
]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

let randomNumber=Math.floor(Math.random()*quotes.length);
const todaysQuote=quotes[randomNumber];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;