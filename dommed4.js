const fruit = ["apple", "banana", "kiwi", "pineapple", "mango"];
const input = document.getElementById("input");

const check = () => {
  const input = document.getElementById("input").textContent;
  if (fruit.includes(input)) {
    const addText = document.createElement("p");
    addText.textContent = input;
    document.body.appendChild(addText);
  }
};

input.addEventListener("input", check);
