import { observable } from './observer.js';

export class StoreVuex {
  #state;
  #mutations;
  #actions; // private으로 지정 -> 외부에서 접근 불가
  state = {};

  constructor({ state, mutations, actions }) {
    this.#state = observable(state);
    this.#mutations = mutations;
    this.#actions = actions;

    Object.keys(state).forEach((key) => {
      Object.defineProperty(this.state, key, { get: () => this.#state[key] }); // state를 직접 수정하지 못하도록 정의
    });
  }

  commit(action, payload) {
    // commit을 통해서만 state를 수정 가능
    this.#mutations[action](this.#state, payload);
  }

  dispatch(action, payload) {
    return this.#actions[action](
      {
        state: this.#state,
        commit: this.commit.bind(this),
        dispatch: this.dispatch.bind(this),
      },
      payload
    );
  }
}
