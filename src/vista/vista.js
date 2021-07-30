// eslint-disable-next-line import/no-cycle
import { controller } from '../controller/controller.js';
// views
import Login from '../pages/login.js';
import Registry from '../pages/registry.js';
// eslint-disable-next-line import/no-cycle
import Dash from '../pages/dash.js';
// views on dashboard
import preparacionView from '../pages/components-dash/views-dash/preparacion.js';
import promoView from '../pages/components-dash/views-dash/promocion.js';
import tramiteView from '../pages/components-dash/views-dash/tramite.js';
import escrituraView from '../pages/components-dash/views-dash/escritura.js';

const currentProgressStr = 'Escritura'; // Preparación, En Promoción, Tramite y Avalúo, Escritura

const views = {
  login: Login,
  registry: Registry,
  dash: Dash,
};

const dashboardViews = {
  preparacion: preparacionView,
  promocion: promoView,
  tramite: tramiteView,
  escritura: escrituraView,

};
const vista = {
  // -- logIn:INICIA SESION
  logIn: () => {
    const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const userData = {
        email: formLogin.email.value,
        password: formLogin.password.value,
      };
      formLogin.reset();
      return controller.logInAuth(userData);
    });
  },
  // -- transformCurrentProgressToNumber: TRANSFORMA LA VISTA RECIENTE EN NUMERO
  transformCurrentProgressToNumber: () => {
    // se ejecuta en el metodo showCurrentProgressView del controller
    // y en el scope global del controller
    switch (currentProgressStr) {
      case 'Preparación':
        return 0;
      case 'En Promoción':
        return 1;
      case 'Tramite y Avalúo':
        return 2;
      case 'Escritura':
        return 3;
      default:
        return 404;// show pag 404
    }
  },
  //

};
export { views, vista, dashboardViews };
