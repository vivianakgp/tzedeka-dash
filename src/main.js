import { controller } from './controller/controller.js';
// AQUI INICIA LA APPLICACION

const initial = () => {
  const hash = window.location.hash;
  controller.templateChange(hash);
  window.addEventListener('hashchange', () => {
    controller.templateChange(hash);
  });
};
window.addEventListener('load', initial);
