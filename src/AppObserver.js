import { ObserverComponent } from './core/ObserverComponent.js';
import { store } from './store.js';

const InputA = () => `<input id="stateA" value="${store.state.a}" size="5" />`;
const InputB = () => `<input id="stateB" value="${store.state.b}" size="5" />`;
const Calculator = () => `<p>a + b = ${store.state.a + store.state.b}</p>`;

export default class AppObserver extends ObserverComponent {
  template() {
    return `
      <h3>Object.defineProperty를 이용한 Observer Pattern</h3>
      ${InputA()}
      ${InputB()}
      ${Calculator()}
    `;
  }

  setEvent() {
    const { $el } = this;

    $el.querySelector('#stateA').addEventListener('change', ({ target }) => {
      store.setState({ a: Number(target.value) });
    });

    $el.querySelector('#stateB').addEventListener('change', ({ target }) => {
      store.setState({ b: Number(target.value) });
    });
  }
}
