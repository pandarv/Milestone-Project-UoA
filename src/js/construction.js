/**** Under Construction Page ****/
const main = document.querySelector("main");
const newDiv = document.createElement("div");
const newH3 = document.createElement("h3");
const image = document.createElement("img");
const imageList = ["img/chris-ainsworth-irk6DwN9giQ-unsplash.jpg", "img/pexels-olenka-sergienko-3686769.jpg", "img/pexels-karolina-grabowska-4476633.jpg", "img/pexels-sound-on-3756943.jpg"];

function randImages() {
  const randomImage = Math.floor(Math.random() * imageList.length);

  image.src = imageList[randomImage];
  main.appendChild(image);
  main.appendChild(newDiv);
  newDiv.appendChild(newH3);
  newH3.innerText = "In Progress...";
}

setInterval(randImages, 1000);
