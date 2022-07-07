import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
// console.log(addToDo.type, deleteToDo());

// 기존 reducer는 state를 mutate하지 못함 => 새로운 state 생성해야함
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// createReducer RTK => state를 mutate해도 된다!!!
// switch문, state mutate가능(뒤에서 새로운 배열 리턴해줌)
// RTK가 immer 아래서 작동하기 때문에 state에 뭔가 추가하고싶다는 걸 알고 뒤에서 새로운 state를 리턴해주고 있음
const reducer = createReducer([], {
  // 리턴안함 = {}안에 리턴 안적음 => 기존 state(push)를 mutate할 수 있음
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  // 리턴함 = {} 안씀 => 새로운 state(filter)를 리턴 할 수도 있음
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
