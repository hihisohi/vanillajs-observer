import { observable } from './observer.js';

export const createStore = (reducer) => {
  const state = observable(reducer()); // reducer가 실행될때 반환하는 state를 observable로 변환

  // getState가 실제 state를 반환하는게 아니라 frozenState를 반환하도록
  const frozenState = {};
  Object.keys(state).forEach((key) => {
    Object.defineProperty(frozenState, key, {
      get: () => state[key], // get만 정의하여 외부에서 set하지 못함
    });
  });

  const dispatch = (action) => {
    // dispatch로만 state 변경 가능
    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      if (!state[key]) continue; // state에 없는 key값이면 변경을 생략
      state[key] = value;
    }
  };

  const getState = () => frozenState;

  // subscribe은 observe로 대체
  return { getState, dispatch };
};
