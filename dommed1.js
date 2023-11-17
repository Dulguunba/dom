const changeMsg = () => {
  const title = document.getElementById("h1");
  title.textContent = "Welcome pinecone";
  const text = document.getElementById("p");
  text.textContent = "Pinecone became Unicorn";
  text.style.backgroundColor = "yellow";
};

const btn = document.getElementById("button");
btn.addEventListener("click", changeMsg);
