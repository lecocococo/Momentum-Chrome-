console.log(1234);
console.log("hello");
console.log(" a a a a a a a a a a");
const a=6; const b=3; //const 상수,변하지 않음
console.log(a+b);
console.log(a*b);
console.log(a/b);

const myName = "name"; // _를 쓰지 않고 변수명 작성하는 것을 camelCase라고 한다

console.log("hello "+ myName);


let myName2 = "name"; //let은 값 변경 가능,생성 할때만 let적음

console.log("hello "+ myName2);

myName2 = "holymoly";
console.log("hello "+ myName2);

//변수명 정의하고 아무 값도 안주면 undefined

const daysOfWeek = ["mon","tue","wed","Thu","fri","sat"];
console.log(daysOfWeek);
daysOfWeek.push("sun");

const nonsense = [1,2,3,"hi",true,false,undefined]; //즉 같은 타입이 아니어도 배열 가능 

console.log(daysOfWeek);
console.log(nonsense);

//object =이 아닌 :를사용
const player = {
    name: "me",
    point: 10,
    fat: true
};

console.log(player);

player.name = "you"; //object의 property 수정 가능 
console.log(player.name);

player.life = 10; //object에 property 추가 가능 
player.point=player.point + 10
console.log(player)
console.log(player.life);



//function

function sayHello(name, age){
    console.log("hello my name is " + name);
    console.log("Age is " + age)
};

sayHello("deal",19);
sayHello("hus",20);
sayHello("qua",21);

const player2 = {
    name: "me",
    point: 10,
    fat: true,
    //function을 object안에 적을땐 함수명을 앞에다가 적고 :function(){}이렇게 작성
    sayHello2: function(name, age){
        console.log("hello " + name + " nice to meet you");
        console.log("My Age is " + age)
    }
};

player2.sayHello2("daiz",20);


const age = prompt("How old are you?");

console.log(typeof age);

console.log(typeof "15", typeof parseInt("15"));
console.log(age, parseInt(age)); //NaN은 Not a Number의 줄임말이다

//function은 내부에서부터 외부 방향으로 실행
const age2 = parseInt(prompt("How old are you?"));
//isNaN
if(isNaN(age2)||age<0){
    console.log("write a real positive number");
}else if(age2<18){
    console.log("Too young to drink");
}else if(age2>=18 && age2<=50){
    console.log("you can drink");
}else{
    console.log("you can't drink");
}


// = 은 값 할당 , === 은 같은지 ,!== 은 같지 않은지 