//createStore -  바뀌는 state 데이터를 넣는 곳
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer함수 : data를 변경하는 함수 (초기값 0)
// action: 두번째 인자
const countModifier = (count = 0, action) => {
  // console.log(action); // { type: "안녕여어" }
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

// createStore(reducer를 요구함) : data를 저장하는 곳
const countStore = createStore(countModifier);
// console.log(countStore.getState()); // 0

// dispatch : action 전달
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
