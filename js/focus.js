
const askFocus = document.querySelector("#ask-focus");
const formFocus = document.querySelector("#main-focus");
const inputFocus = document.querySelector("#main-focus input");

const FOCUS = "focus";

function submitMainFocus(event){
    event.preventDefault();
    const focus = inputFocus.value;
    // askFocus.classList.add("hidden");
    hideMainFocus();

    askFocus.innerText = `🍊${focus}`
    
    localStorage.setItem(FOCUS,focus);

}

function hideMainFocus(){
    formFocus.classList.add("hidden");
}
const storageFocus = localStorage.getItem(FOCUS);

if (storageFocus !== null){
    hideMainFocus();
    askFocus.innerText = `🍊${storageFocus}`;
}else{
    formFocus.addEventListener("submit",submitMainFocus);
}
//formFocus.addEventListener("submit",submitMainFocus);