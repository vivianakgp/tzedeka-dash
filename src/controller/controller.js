// eslint-disable-next-line import/no-cycle
import { vista } from '../vista/vista.js';
import { model } from '../model/model.js';
import { methodsDesktop } from './methodsDesk.js';
// eslint-disable-next-line import/no-cycle
import { methodsCell } from './methodsCell.js';

// numberOfCurrentDashboardView: numero de vista para mostrar por defecto
const numberOfCurrentDashboardView = vista.transformCurrentViewInDashToNumber();

export const controller = {
  // --  templateChange: DETECTA EL HASH Y CAMBIA LAS PRINCIPALES VISTAS
  changeMainView(hash) {
    const mainSection = document.getElementById('container');
    mainSection.innerHTML = '';
    switch (hash) {
      case '':
        mainSection.appendChild(vista.mainViews.Login());
        vista.logIn();
        break;
      case '#/register':
        mainSection.appendChild(vista.mainViews.Registry());
        break;
      case '#/dashboard':
        mainSection.appendChild(vista.mainViews.Dash());
        controller.showCurrentProgressView();
        controller.clickBurgerMenu();
        methodsDesktop.addEventClickBtnDashInDesktop();
        methodsCell.controllerBtnNextProgressViewInCell();
        methodsCell.controllerBtnPreviousProgressViewInCell();
        break;
      default:
    }
  },
  // --  logInAuth: CIERRA SESION
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
  // -- getCurrentUser: DETECTA EL ID USER
  getCurrentUser: () => {
    model.getCurrentUser((user) => {
      if (user) {
        console.log(`${'El usuario ha iniciado la sesión.'}${user}`);
      } else {
        console.log('Ningún usuario está registrado');
      }
    });
  },
  // -- showCurrentProgressView: MUESTRA VISTA DE INICIO EN EL DASHBOARD
  showCurrentProgressView() {
    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    switch (numberOfCurrentDashboardView) {
      case 0:
        blackboard.appendChild(vista.dashboardViews.preparacion);
        break;
      case 1:
        blackboard.appendChild(vista.dashboardViews.promocion);
        break;
      case 2:
        blackboard.appendChild(vista.dashboardViews.tramite);
        break;
      case 3:
        blackboard.appendChild(vista.dashboardViews.escritura);
        break;
      default:
        // show pag err
    }
  },
  clickBurgerMenu() {
    const burgerButton = document.getElementById('btnOpenMenu');
    console.log(burgerButton);
    burgerButton.addEventListener('click', () => {
      alert('burger btn');
    });
  },
};
