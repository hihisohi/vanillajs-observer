import { createStore } from './core/StoreRedux.js';

// 초기 state 정의
const initState = {
  a: 10,
  b: 20,
};

// dispatch에서 사용될 type 정의
export const SET_A = 'SET_A';
export const SET_B = 'SET_B';

// reducer를 정의하여 store에 넘겨줌
export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case 'SET_A':
      return { ...state, a: action.payload };
    case 'SET_B':
      return { ...state, b: action.payload };
    default:
      return state;
  }
});

// reducer에서 사용될 action 정의
export const setA = (payload) => ({ type: SET_A, payload });
export const setB = (payload) => ({ type: SET_B, payload });
