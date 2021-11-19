const API_KEY="ddf0d3ef1f5e4697e9f121812de1ae9d";
function onGeoOk(position){
    console.log(position);
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    console.log(`You live in (${lat},${lng})`);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //url 요청 fetch는 promise : 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어난다 그래서 .then 반응오면 json 객체로 변형하고 then 그리고 나서 data를
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        const name=data.name;
        const weatherInfo=data.weather[0].main;
        console.log(weather,city);
        console.log(name,weatherInfo);
        city.innerText=name;
        weather.innerText=weatherInfo;
    });
}
function onGeoError(){
    alert(`Can't find you. No weather for you.`);
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); //위치를 알려준다. 매개변수 success,error의 콜백함수 두 개


