const insert = () => {
  const insertNum = document.getElementById("input");
  const circleNum = Number(insertNum.value);
  for (let i = 1; i <= circleNum; i++) {
    const circle = document.createElement("div");
    // circle.textContent = i;
    circle.classList.add("circle");
    circle.style.backgroundColor = `rgb(${i * 3 + 29},${224 + i},${
      52 + i * 0.5
    })`;
    document.body.appendChild(circle);
  }
};

const btn = document.getElementById("button");
btn.addEventListener("click", insert);
