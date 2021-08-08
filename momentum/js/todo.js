const toDoBox = document.querySelector("#todo-box");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); //form 내의 input 태그 쪽을 찾음
const toDoList = document.getElementById("todo-list");
const toDoButton = document.getElementById("todo-button");

const TODOS_KEY = "todos";
let toDos = [];

//JSON.stringfy는 자바스크립트 객체, 배열또는 어떤 자바스크립트 코드 이던 string으로 만들어줌
function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos)); //이렇게 해주면 배열로 저장됨, 배열을 string화해서 저장 하기 때뮨 
    

}

function deleteToDo(event){
    //target은 클릭된 html element
    const li = event.target.parentElement;
    //삭제
    li.remove();
    //!!!!!! 잘보자
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDoObject){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDoObject.id;
    span.innerText = newToDoObject.text;
    button.innerText="❌"
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        id: Date.now(),
        text: newToDo,
    }
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
}

function popToDoBox(){
    toDoButton.classList.add(HIDDEN_CLASSNAME)
    toDoBox.classList.remove(HIDDEN_CLASSNAME);
}

toDoForm.addEventListener("submit",handleToDoSubmit);
toDoButton.addEventListener("click",popToDoBox);

const savedToDos = localStorage.getItem(TODOS_KEY);

//JSON.parse()를 해주면 자바스크립트가 이해할수있는 객체, 배열등으로 바꿔줌
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

//이 함수는  무조건 true를 반환해야함 , 새로운 배열에서 object를 유지하고 싶다면 
//false는 object가 유지 되지 않고 사라짐 
function sexyFilter(){

}
