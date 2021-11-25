const clockTitle = document.querySelector(".js-clock");

setInterval(()=>{
    const christmas=new Date('2021-12-25');
    const now=new Date();
    const differentMsec=christmas.getTime()-now.getTime();
    const differentTotalSec=differentMsec/1000;
    const differentDate=Math.floor(differentTotalSec/(60*60*24));
    const differentHour=Math.floor((differentTotalSec-(differentDate*60*60*24))/(60*60));
    const differentMin=Math.floor((differentTotalSec-(differentDate*60*60*24)-(differentHour*60*60))/60);
    const differentSec=Math.floor(differentTotalSec-(differentDate*60*60*24)-(differentHour*60*60)-differentMin*60);
    // const month=christmas.getMonth()-now.getMonth();
    // const date=christmas.getDate()-now.getDate();
    // const hour=christmas.getHours()-now.getHours();
    // const min=christmas.getMinutes()-now.getMinutes();
    // const sec=christmas.getSeconds()-now.getSeconds();
    const remainDate=`${differentDate}d ${differentHour}h ${differentMin}m ${differentSec}s`;
    console.log(remainDate);
    clockTitle.innerText=remainDate;
},1000); //1초간격으로 getClock함수를 호출한다.