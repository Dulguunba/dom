const box = document.createElement("div");
box.style.width = "250px";
box.style.height = "250px";
box.style.backgroundColor = "red";
document.body.appendChild(box);

const circleClick = () => {
  box.style.borderRadius = "50%";
};

const triangleclick = () => {
  box.style.borderRadius = "0";
  box.style.backgroundColor = "transparent";
  box.style.width = "0";
  box.style.height = "0";
  box.style.borderLeft = "125px solid transparent";
  box.style.borderRight = "125px solid transparent";
  box.style.borderBottom = "250px solid red";
};

box.addEventListener("click", circleClick);
box.addEventListener("dblclick", triangleclick);
