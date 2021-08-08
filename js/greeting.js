// const loginForm = document.querySelector("#login_form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
//const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const mainFocus = document.querySelector("#main-focus");
const divFocus = document.querySelector("#ask-Input-Mainfocus");

const HIDDEN_CLASSNAME = "hidden"  //변수에 string만 담기면 변수명을 대문자로
const USERNAME_KEY = "username";

//submit의 기본 동작은 브라우저 새로고침
function onLoginSubmit(event){   //event에 event의 정보들을 받음
    event.preventDefault(); //브라우저의 기본 동작을 멈춰줌 
                            //Default값을 초기화시켜서 JS로 동작을 재구성 -> 원하는 동작을 실행
    loginForm.classList.add(HIDDEN_CLASSNAME);
    toDoButton.classList.remove(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    //greeting.innerText = "hello " + username; 아래 줄과 똑같은 일함
    paintGreeting(username);

    // if (loginInputValue === ""){
    //     alert("please write your name");
    // }else if (loginInputValue.length>15){
    //     alert("Too long!!")
    // }
}

function handleLinkClick(event){
    alert("clicked!");
    event.preventDefault();
    console.dir(event);
    
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    mainFocus.classList.remove(HIDDEN_CLASSNAME);
    divFocus.classList.remove(HIDDEN_CLASSNAME);
}

//함수에 ()을 붙이면 브라우저가 바로 실행해버림
//loginForm.addEventListener("submit", onLoginSubmit); // 함수 뒤에 아무것도 없어보이지만 
                                                     // 실제로는 첫번째 argument로 많은 event에 대한 정보를 주고있음
//link.addEventListener("click",handleLinkClick);


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreeting(saveUsername);
    mainFocus.classList.remove(HIDDEN_CLASSNAME);
}