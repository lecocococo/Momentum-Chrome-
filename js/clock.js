const clock = document.querySelector("h2#clock");

//int 를 string으로 변환하는 법=> String()으로 감싸면됨 
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    //const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = `${hours}:${minutes}`;
};

getClock();
setInterval(getClock,1000);

//setInterval(sayHello,5000); // ms단위 
//setTimeout(sayHello,5000);