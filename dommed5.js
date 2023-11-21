const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let i = 1; i <= 7; i++) {
  const img = document.createElement("img");
  img.src = "https://picsum.photos/800/400";
  img.classList.add("img");
  img.id = i;
  container.appendChild(img);
}

const leftTransition = () => {
  container.scrollLeft -= 150;
};

const rightTransition = () => {
  container.scrollLeft += 150;
};

const leftBtn = document.getElementById("leftarrow");
leftBtn.addEventListener("click", leftTransition);

const rightBtn = document.getElementById("rightarrow");
rightBtn.addEventListener("click", rightTransition);
