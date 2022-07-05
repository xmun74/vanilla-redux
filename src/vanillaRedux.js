//createStore -  바뀌는 state 데이터를 넣는 곳
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// reducer 함수 : data를 변경하는 함수 (초기값 0) , dispatch에 action 전달하여 소통
// reducer의 리턴 : application state가 됨
// action 객체 : reducer 함수의 두번째 인자 {type: 'MINUS'}
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
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

// dispatch : action 받아옴, type 프로퍼티로 전달해야함
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
