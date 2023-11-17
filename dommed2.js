const changeColor = () => {
  const box = document.getElementById("box");
  if (box.style.backgroundColor === "green")
    return (box.style.backgroundColor = "red");
  return (box.style.backgroundColor = "green");
};

const btn = document.getElementById("button");
btn.addEventListener("click", changeColor);
