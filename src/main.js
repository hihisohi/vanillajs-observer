import App from './App.js';
import AppObserver from './AppObserver.js';
import { AppRedux } from './AppRedux.js';
import { AppVuex } from './AppVuex.js';

// main에서 App 컴포넌트를 마운트
new App(document.querySelector('#app'));

new AppObserver(document.querySelector('#observerApp'));
new AppVuex(document.querySelector('#vuexApp'));
new AppRedux(document.querySelector('#reduxApp'));
