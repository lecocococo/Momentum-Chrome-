const images = ["0.jpg","1.jpg","2.jpg",];
const chosenImage = images[Math.floor(Math.random()*images.length)];

//img라는 elelment를 만듬 
const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;
backgroundImage.classList.add("background");
//html에 element추가
//append는 가장 마지막에 추가, prepend는 가장 앞에 추가
document.body.appendChild(backgroundImage);

backgroundImage.id = "backgroundImage";