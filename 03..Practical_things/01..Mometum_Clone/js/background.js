const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
];

const btnChangeBg = document.querySelector(".btnChangeBg");

function changeBackGround() {
  let chosenImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.background = `no-repeat url(./img/${chosenImage})`;
  document.body.style.backgroundSize = "cover";
}
changeBackGround();

btnChangeBg.addEventListener("click", changeBackGround);
