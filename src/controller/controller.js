// eslint-disable-next-line import/no-cycle
import { views, vista, dashboardViews } from '../view/index.js';
import { model } from '../model/model.js';

const preparacion = dashboardViews.preparacion();
const promocion = dashboardViews.promocion();
const tramite = dashboardViews.tramite();
const escritura = dashboardViews.escritura();
const arrayProgressViews = [
  preparacion,
  promocion,
  tramite,
  escritura,
];

// creamos un objeto que controla las vistas las ejecuta segun el tipo de hash en el navegador.
// controla la informacion que pasa de la vista al modelo y viceversa
// nuestro objeto se llama contoller y tiene una propiedad que contiene una funcion(metodo)
// exporto el objeto cotroller/ es importado en main.js, model y vista.
const currentProgressNumber = vista.transformCurrentProgressToNumber();
let Counter = currentProgressNumber;
console.log(`${Counter} :valor del contador`);
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
        controller.showCurrentProgressView();
        vista.addEventClickBtnDashOnCell();

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
        console.log(`${'El usuario ha iniciado la sesión.'}${user}`);
      } else {
        console.log('Ningún usuario está registrado');
      }
    });
  },
  showCurrentProgressView: () => {
    console.log(`${currentProgressNumber} :valor de vista a mostrar`);
    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    switch (currentProgressNumber) {
      case 0:
        blackboard.appendChild(dashboardViews.preparacion());
        break;
      case 1:
        blackboard.appendChild(dashboardViews.promocion());
        break;
      case 2:
        blackboard.appendChild(dashboardViews.tramite());
        break;
      case 3:
        blackboard.appendChild(dashboardViews.escritura());
        break;
      default:
        // show pag err
    }
  },
  // metodo para contolar la vista del boton previous progress en dash cell
  traversesArrayForward: () => {
    console.log('evento click activado');
    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    if (Counter < arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[Counter + 1]);
      // eslint-disable-next-line no-plusplus
      Counter++;
      console.log(`${Counter} :valor del contador al plusplus`);
    } else if (Counter === arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[Counter + 1]);
      vista.removeEventClickBtnDashOnCell();
    }
  },
  progressArrayBackwards: () => {
    const blackboard = document.getElementById('Blackboard');
    if (Counter === 0) {
      // eslint-disable-next-line no-plusplus
      Counter++;
    } else if (Counter > 0) {
      blackboard.innerHTML = '';
      blackboard.appendChild(arrayProgressViews[Counter - 1]);
      // eslint-disable-next-line no-plusplus
      Counter--;
    }
  },
  // test: () => {
  //   alert('evento');
  // },
};
