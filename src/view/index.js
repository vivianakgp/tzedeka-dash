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

// creo un objeto views con propiedades que contienen
// una pagina/funcion ocea que son metodos del objeto views

const currentProgressStr = 'Preparación'; // Preparación, En Promoción, Tramite y Avalúo, Escritura

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
// creo un objeto llamado vista este mandara la informacion de las interfaces al controller.
const vista = {
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
  transformCurrentProgressToNumber: () => {
    // se ejecuta en el metodo showCurrentProgressView del controller
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
  // metodo que agregue el evento a los dos botones del dash en celular
  addEventClickBtnDashOnCell: () => {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    btnNextProgressView.addEventListener('click', controller.traversesArrayForward);
    // const btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    // btnPreviousProgressView.addEventListener('click', controller.progressArrayBackwards);
    // btnPreviousProgressView.addEventListener('click', controller.test);
  },
  removeEventClickBtnDashOnCell: () => {
    const btnNextProgressView = document.getElementById('btnNextProgressView');
    btnNextProgressView.removeEventListener('click', controller.traversesArrayForward);
  },
};
export { views, vista, dashboardViews };
