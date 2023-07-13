import { ObserverComponent } from './core/ObserverComponent.js';
import { store } from './store_Vuex.js';

const InputA = () => `<input id="stateA" value="${store.state.a}" size="5" />`;
const InputB = () => `<input id="stateB" value="${store.state.b}" size="5" />`;
const Calculator = () => `<p>a + b = ${store.state.a + store.state.b}</p>`;

export class AppVuex extends ObserverComponent {
  template() {
    return `
      <h3>Flux Pattern - Vuex같은 Store 만들기</h3>
      ${InputA()}
      ${InputB()}
      ${Calculator()}
    `;
  }

  setEvent() {
    const { $el } = this;

    $el.querySelector('#stateA').addEventListener('change', ({ target }) => {
      store.commit('SET_A', Number(target.value)); // commit을 통해 값 변경
    });

    $el.querySelector('#stateB').addEventListener('change', ({ target }) => {
      store.commit('SET_B', Number(target.value));
    });
  }
}
