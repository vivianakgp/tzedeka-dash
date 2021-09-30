import vista from '../vista/vista.js';
import model from '../model/model.js';
import menuController from './menu-controller.js';

// numberOfCurrentDashboardView, numero de vista para mostrar por defecto
const numberOfCurrentDashboardView = vista.transformCurrentViewInDashToNumber();
// dashboardViews obj to array
const dashboardViews = vista.dashboardViews;
const arrayProgressViews = Object.values(dashboardViews);
let counter = vista.transformCurrentViewInDashToNumber();

export const controller = {
  // --  templateChange: DETECTA EL HASH Y CAMBIA LAS PRINCIPALES VISTAS
  changeMainView(hash) {
    const mainSection = document.getElementById('container');
    mainSection.innerHTML = '';
    switch (hash) {
      case '':
        mainSection.appendChild(vista.mainViews.Login());
        controller.logInAuth();
        break;
      case '#/register':
        mainSection.appendChild(vista.mainViews.Registry());
        break;
      case '#/dashboard':
        mainSection.appendChild(vista.mainViews.Dash());
        controller.initializer();
        menuController.initializer();
        break;
      default:
    }
  },
  initializer() {
    controller.showCurrentProgressView();
    controller.clickBurgerMenu();
    controller.addEventClickBtnDashInDesktop();
    controller.controllerBtnNextProgressViewInCell();
    controller.controllerBtnPreviousProgressViewInCell();
  },
  // --  logInAuth: INICIA SESION
  logInAuth() {
    const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formLogin.email.value !== '' && formLogin.password.value !== '') {
        const userData = {
          email: formLogin.email.value,
          password: formLogin.password.value,
        };
        model.userAuth(userData)
          .then(() => {
            window.location.hash = '#/dashboard';
            const hash = window.location.hash;
            window.addEventListener('hashchange', () => {
              this.changeMainView(hash);
            });
            formLogin.reset();
          })
          .catch((error) => {
            const errorAuth = error.message;
            vista.showAuthenticationError(errorAuth, formLogin);
          });
      } else if (formLogin.email.value === '' || formLogin.password.value === '') {
        const messageErr = '¡Correo o contraseña vacia!';
        vista.showAuthenticationError(messageErr, formLogin);
      }
    });
  },
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
    const menu = document.getElementById('menu');
    burgerButton.addEventListener('click', () => {
      menu.classList.add('openMenu');
    });
  },
  /**
   * METODOS PARA DESKTOP
   */
  // --  addEventClickBtnDash: AGREGA EVENTOS EN LOS BTN DE progressStatusBar EN DESKTOP
  addEventClickBtnDashInDesktop: () => {
    const buttonsProgressStatusBar = document.getElementsByClassName('btnProgressStatusBar');
    Array.prototype.forEach.call(buttonsProgressStatusBar, (btn) => {
      btn.addEventListener('click', (evt) => { controller.progressStatusBarChangeOfViews(evt); });
    });
  },
  // -- progressStatusBarChangeOfViews: ABRE DASH VIEW SEGUN EL  BTN
  // QUE DISPARO EL EVENTO EN DESKTOP
  progressStatusBarChangeOfViews: (evt) => {
    const progress = evt.target.dataset.progress;
    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    // eslint-disable-next-line default-case
    switch (progress) {
      case '1':
        blackboard.appendChild(vista.dashboardViews.preparacion);
        break;
      case '2':
        blackboard.appendChild(vista.dashboardViews.promocion);
        break;
      case '3':
        blackboard.appendChild(vista.dashboardViews.tramite);
        break;
      case '4':
        blackboard.appendChild(vista.dashboardViews.escritura);
        break;
    }
  },
  /**
   * METODOS EN CELLULAR
   */
  // -- traversesArrayForward: RECORRE arrayProgressViews ADELANTE.
  traversesArrayForward() {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    btnPreviousProgressView.addEventListener('click', controller.travelsArrayBackwards);
    btnPreviousProgressView.classList.remove('hideBtn');
    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    if (counter < arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[counter + 1]);
      // eslint-disable-next-line no-plusplus
      counter++;
    } else if (counter === arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[counter + 1]);
      btnNextProgressView.classList.add('hideBtn');
      btnNextProgressView.removeEventListener('click', controller.traversesArrayForward);
      // eslint-disable-next-line no-plusplus
      counter++;
    }
  },
  // -- progressArrayBackwards:RECORRE EL ARRAY DE VISTAS*/DASH ATRAS.
  travelsArrayBackwards() {
    const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    btnNextProgressView.addEventListener('click', controller.traversesArrayForward);
    btnNextProgressView.classList.remove('hideBtn');
    const blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';
    if (counter === 1) {
      blackboard.appendChild(arrayProgressViews[counter - 1]);
      btnPreviousProgressView.classList.add('hideBtn');
      btnPreviousProgressView.removeEventListener('click', controller.travelsArrayBackwards);
      // eslint-disable-next-line no-plusplus
      counter--;
    } else {
      blackboard.appendChild(arrayProgressViews[counter - 1]);
      // eslint-disable-next-line no-plusplus
      counter--;
    }
  },
  //  controllerBtnNextProgressViewInCell: PRENDE Y APAGA EL BOTON NEXT.
  controllerBtnNextProgressViewInCell() {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    if (counter === arrayProgressViews.length - 1) {
      btnNextProgressView.removeEventListener('click', this.traversesArrayForward);
      btnNextProgressView.classList.add('hideBtn');
    } else {
      btnNextProgressView.addEventListener('click', this.traversesArrayForward);
    }
  },
  // controllerBtnPreviousProgressViewInCell : PRENDE Y APAGA EL BOTON PREVIOUS.
  controllerBtnPreviousProgressViewInCell() {
    const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    if (counter === 0) {
      btnPreviousProgressView.removeEventListener('click', this.travelsArrayBackwards);
      btnPreviousProgressView.classList.add('hideBtn');
    } else {
      btnPreviousProgressView.addEventListener('click', this.travelsArrayBackwards);
    }
  },
};
