function random(number) {
  return Math.floor(Math.random() * number + 1);
}

const color = () => {
  const rndCol = `rgb(${random(250)}, ${random(250)}, ${random(250)})`;
  document.body.style.backgroundColor = rndCol;
};

const changeColorBtn = document.getElementById("btn");
changeColorBtn.addEventListener("click", color);
