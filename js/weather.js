const API_KEY = "32dde748b442c03cc332c11100103668";

//자바스크립트가 호출하면 위치에 대한 정보를 넘겨준다.
function onGeolocationSuccess(position){
    const latitude = position.coords.latitude; //위도 
    const longitude = position.coords.longitude; //경도
    //console.log(`You live in ${latitude}, ${longitude}`);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    //console.log(URL);
    fetch(URL)
        .then(response => response.json())
        .then(data =>{
        const fillCity = document.querySelector("#weather span:first-child");
        const fillWeather = document.querySelector("#weather span:nth-of-type(2)");
        //nth-of-type(2)!!!! 중요!!! 여러개의 같은 요소중 2번쨰의 값을 가져옴 이걸이용하면 모든위치 가능  
        const fillTemparature = document.querySelector("#weather span:nth-of-type(3)");
        const name = data.name;
        const weather = data.weather[0].main;
        const temparature = data.main.temp;

        fillCity.innerText = name;
        fillWeather.innerText = weather;
        fillTemparature.innerText = temparature;

    });
}

function onGeolocationErr(){
    alert("can't find your location");
}
//위치 얻기
navigator.geolocation.getCurrentPosition(onGeolocationSuccess,onGeolocationErr);

