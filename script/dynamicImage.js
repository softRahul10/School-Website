function changeImage() {
  const img = document.querySelector(".imgJs");
  const link = "./images/";
  let randomNum = Math.floor(Math.random() * 3);

  img.setAttribute("src", `${link}${randomNum}.png`);
}

setInterval(changeImage, 3000);


window.addEventListener('resize',()=>{
  const width = window.innerWidth;
  const content = document.querySelector('.content');
  const msg = document.querySelector('.special-msg');
  if(width < 1000) {
    content.style.display = 'none';
    msg.style.display = 'block';
  }else{
    content.style.display = 'block';
    msg.style.display = 'none';
  }

})