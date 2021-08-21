import { controller } from './controller/controller.js';

const initial = () => {
  const hash = window.location.hash;
  controller.changeMainView(hash);
  window.addEventListener('hashchange', () => {
    controller.changeMainView(hash);
  });
};
window.addEventListener('load', initial);
