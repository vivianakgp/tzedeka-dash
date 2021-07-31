/* eslint-disable no-plusplus */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
import { views, vista, dashboardViews } from '../vista/vista.js';
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

const currentProgressNumber = vista.transformCurrentProgressToNumber();
let Counter = currentProgressNumber;
console.log(`${Counter} :valor del contador`);

export const controller = {
  // --  templateChange: DETECTA EL HASH Y CAMBIA LA VISTA
  templateChange: (hash) => {
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
        controller.addEventClickBtnDashInCell();
        controller.addEventClickBtnDashInDesktop();
        controller.changeDisableBtnDefault();

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
  // -- showCurrentProgressView: MUESTRA LA VISTA* POR DEFAULT QUE LE CORRESPONDE EN EL DASH
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
  // -- REMUEVEN EVENTOS CLICK EN BTN CELL
  removeEventClickBtnNextProgressViewInCell: () => {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    btnNextProgressView.removeEventListener('click', controller.traversesArrayForward);
  },
  removeEventClickBtnPreviousProgressViewInCell: () => {
    const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    btnPreviousProgressView.removeEventListener('click', controller.progressArrayBackwards);
  },
  //  changeDisableBtn: HABILITA Y DESABILITA EL BTN EN CELL
  changeDisableBtnDefault: () => {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    if (Counter === 3) {
      btnNextProgressView.classList.add('hideBtn');
    } else if (Counter === 0) {
      btnPreviousProgressView.classList.add('hideBtn');
    }
  },
  // -- traversesArrayForward: RECORRE EL ARRAY DE VISTAS*/DASH ADELANTE
  traversesArrayForward: () => {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    btnPreviousProgressView.classList.remove('hideBtn');

    if (Counter < arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[Counter + 1]);
      // eslint-disable-next-line no-plusplus
      Counter++;
      console.log(`${Counter} :valor del contador al plusplus`);
    } else if (Counter === arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[Counter + 1]);
      btnNextProgressView.classList.add('hideBtn');
      controller.removeEventClickBtnNextProgressViewInCell();
      // eslint-disable-next-line no-plusplus
      Counter++;
      console.log(`${Counter} :valor del contador al plusplus en condicional 2 y elimina el evento`);
    }
  },
  // -- progressArrayBackwards:RECORRE EL ARRAY DE VISTAS*/DASH ATRAS
  progressArrayBackwards: () => {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');

    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    if (Counter === 1) {
      console.log(`${Counter} :valor del contador al--`);
      blackboard.appendChild(arrayProgressViews[Counter - 1]);
      btnPreviousProgressView.classList.add('hideBtn');
      controller.removeEventClickBtnPreviousProgressViewInCell();
    } else {
      blackboard.appendChild(arrayProgressViews[Counter - 1]);
      console.log(`${Counter} :valor del contador al--`);
      btnNextProgressView.classList.remove('hideBtn');
      // eslint-disable-next-line no-plusplus
      Counter--;
    }
  },
  // -- addEventClickBtnDashOnCell: AGREGA LOS EVENTOS PARA CAMBIAR
  // DE VISTA* EN LOS BTN DEL DASH SOLO EN CELL
  addEventClickBtnDashInCell: () => {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    btnNextProgressView.addEventListener('click', controller.traversesArrayForward);
    btnPreviousProgressView.addEventListener('click', controller.progressArrayBackwards);
  },

  // --  addEventClickBtnDash: AGREGA EVENTOS EN LOS BTN DE progressStatusBar EN DESKTOP
  addEventClickBtnDashInDesktop: () => {
    const buttonsProgressStatusBar = document.getElementsByClassName('btnProgressStatusBar');
    Array.prototype.forEach.call(buttonsProgressStatusBar, (btn) => {
      btn.addEventListener('click', (evt) => { controller.progressStatusBarChangeOfViews(evt); });
    });
  },
  // -- progressStatusBarChangeOfViews: ABRE VISTA DEL BOTON QUE DISPARO EL EVENTO CLICK
  progressStatusBarChangeOfViews: (evt) => {
    const progress = evt.target.dataset.progress;
    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    // eslint-disable-next-line default-case
    switch (progress) {
      case '1':
        blackboard.appendChild(preparacion);
        break;
      case '2':
        blackboard.appendChild(promocion);
        break;
      case '3':
        blackboard.appendChild(tramite);
        break;
      case '4':
        blackboard.appendChild(escritura);
        break;
    }
  },
};
