function changeImage() {
  const img = document.querySelector(".imgJs");
  const link = "./images/";
  let randomNum = Math.floor(Math.random() * 3);

  img.setAttribute("src", `${link}${randomNum}.png`);
}

setInterval(changeImage, 3000);
