// const h1 = document.getElementById("h1");

// h1.innerText = "Got you!"

// console.log(h1.className);


// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

const h1 = document.querySelector("div.hello:first-child h1"); //element를 CSS방식으로 검색
                                                   // css selector를 사용하여 class hello를 찾고 그 안의 h1을 가져옴
                                                   // css selector이기 때문에 .hello 이런식으로 함
                                                   // class 라는 것을 알려주기 위해 .을 사용
                                                   // #은 id임을 명시해줌 ex:#h1
//h1.innerText = "hello"
console.log(h1);
console.dir(h1);



function handleh1Click(){
    //h1.className = "active"; ->css의 .active 사용, h1의 tag에 class = ~~ 생기게됨
    //const clickedClass = "active"
    // if(h1.classList.contains( clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else{
    //     h1.classList.add(clickedClass);
    // }

    //!!!!!!!!!!!!!!! toggle은 적힌 class가 있으면 classList에서 없애주고 없으면 classList에 추가해준다
    h1.classList.toggle("active");
}
//eventListener
//첫번째 파라미터에 명시된 이벤트 발생시 뒤에 함수를 실행 
//함수에 () 안씀
//자바 스크립트가 대신 실행해줌
h1.addEventListener("click", handleh1Click);


//console.dir 에서 나온 property중에서 on이 붙어있으면 event listener이다

// function handleMouseEnter(){
//     h1.innerText = "mouse is here";
// }
// //h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;

// function hadleMouseLeave(){
//     h1.innerText = "mouse is gone";
// }
// h1.addEventListener("mouseleave", hadleMouseLeave);

// function handlewindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// window.addEventListener("resize", handlewindowResize);

// function handlewindowCopy(){
//     alert("copier!");
// };
// window.addEventListener("copy", handlewindowCopy);

// function handlewindowoffline(){
//     alert("SOS no WIFI");
// };
// window.addEventListener("offline", handlewindowoffline);

// function handlewindowonline(){
//     alert("ALL GOOD");
// };
// window.addEventListener("online", handlewindowoonline);