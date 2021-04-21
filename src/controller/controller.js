// eslint-disable-next-line import/no-cycle
import { views, vista } from '../view/index.js';

import { model } from '../model/model.js';
// creamos un objeto que controla las vistas las ejecuta segun el tipo de hash en el navegador.
// controla la informacion que pasa de la vista al modelo y viceversa
// nuestro objeto se llama contoller y tiene una propiedad que contiene una funcion(metodo)
// exporto el objeto cotroller/ es importado en main.js, model y vista.
export const controller = {
  templateChange: (hash) => {
    // hash es pasado como parametro enviado desde la funcion initial con window.location.hash
    const mainSection = document.getElementById('container');
    mainSection.innerHTML = ' ';
    switch (hash) {
      case '':
        mainSection.appendChild(views.login());
        vista.logIn();
        break;
      case '#/register':
        mainSection.appendChild(views.registry());
        break;
      case '#/dashboard':
        mainSection.appendChild(views.dash());
        break;
      default:
    }
  },
  logInAuth: (userData) => model.logInAuth(userData)
    .then(() => {
      // location.hash='#/register';
      // eslint-disable-next-line no-console
      console.log('obten el id del usuario');
      controller.getCurrentUser();
      // controller.templateChange('#/register');
    })
    .catch((error) => {
      const errorCode = error.errorCode;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        // eslint-disable-next-line no-alert
        alert('Wrong password.');
      } else {
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      }
      // eslint-disable-next-line no-console
      console.log(error);
    }),
  getCurrentUser: () => {
    model.getCurrentUser((user) => {
      if (user) {
        console.log('El usuario ha iniciado la sesión.' + ' ' + user);
      } else {
        console.log('Ningún usuario está registrado');
      }
    });
  },

};
