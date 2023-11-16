const random = () => {
  const random1Input = document.getElementById("random1");
  const random2Input = document.getElementById("random2");

  random1Input.value = Math.floor(Math.random() * 100) + 1;
  random2Input.value = Math.floor(Math.random() * 100) + 1;
  console.log(random1Input);

  document.getElementById("input").value = "";
};

const checkformula = () => {
  const random1Input = document.getElementById("random1");
  const random2Input = document.getElementById("random2");

  const sumInput = document.getElementById("input");

  let sumOfTwoRandNum = Number(random1Input.value) + Number(random2Input.value);
  let inputNum = Number(sumInput.value);

  if (inputNum === sumOfTwoRandNum) {
    alert("True");
  } else alert("False");
};

const checkbtn = document.getElementById("check");
checkbtn.addEventListener("click", checkformula);
const renewbtn = document.getElementById("renew");
renewbtn.addEventListener("click", random);
