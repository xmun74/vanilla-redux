const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count++;
  updateText(); // 리페인팅 - 값 업데이트
};

const handleMinus = () => {
  count--;
  updateText(); // 리페인팅 - 값 업데이트
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
