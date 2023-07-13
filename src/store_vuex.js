import { StoreVuex } from './core/StoreVuex.js';

export const store = new StoreVuex({
  state: {
    a: 10,
    b: 20,
  },

  // state의 값은 오직 mutations를 통해서 변경 가능
  mutations: {
    SET_A(state, payload) {
      state.a = payload;
    },

    SET_B(state, payload) {
      state.b = payload;
    },
  },

  // action은 지금 쓸만한 api가 없어서 생략
});
