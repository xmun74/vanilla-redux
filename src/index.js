//createStore -  바뀌는 state 데이터를 넣는 곳
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

// reducer 함수 : data를 변경하는 함수 (초기값 0)
// action 객체 : reducer 함수의 두번째 인자 {type: 'MINUS'}
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

// Store(reducer를 요구함) : 전역 상태 저장소. data를 저장하는 곳
const countStore = createStore(countModifier);
// console.log(countStore.getState()); // 0

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);
// subscribe - store안에 변화를 알 수 있게 해준다

// dispatch : action 전달
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
