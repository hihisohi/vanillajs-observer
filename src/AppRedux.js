import { ObserverComponent } from './core/ObserverComponent.js';
import { setA, setB, store } from './store_redux.js';

const InputA = () => `<input id="stateA" value="${store.getState().a}" size="5" />`;
const InputB = () => `<input id="stateB" value="${store.getState().b}" size="5" />`;
const Calculator = () => `<p>a + b = ${store.getState().a + store.getState().b}</p>`;

export class AppRedux extends ObserverComponent {
  template() {
    return `
      <h3>Flux Pattern - Redux같은 Store 만들기</h3>
      ${InputA()}
      ${InputB()}
      ${Calculator()}
    `;
  }

  setEvent() {
    const { $el } = this;

    $el.querySelector('#stateA').addEventListener('change', ({ target }) => {
      store.dispatch(setA(Number(target.value))); // dispatch를 통해 값 변경
    });

    $el.querySelector('#stateB').addEventListener('change', ({ target }) => {
      store.dispatch(setB(Number(target.value)));
    });
  }
}
