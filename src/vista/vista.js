// main views
import Login from '../pages/login.js';
import { dashboard, user } from '../pages/dash.js';
// views on dashboard
import preparacionView from '../pages/components-dash/views-dash/preparacion.js';
import promoView from '../pages/components-dash/views-dash/promocion.js';
import tramiteView from '../pages/components-dash/views-dash/tramite.js';
import escrituraView from '../pages/components-dash/views-dash/escritura.js';

const vista = {
  mainViews: {
    Login,
    Dash: dashboard,
  },
  dashboardViews: {
    preparacion: preparacionView(),
    promocion: promoView(),
    tramite: tramiteView(),
    escritura: escrituraView(),
  },
  // -- showAuthenticationError: MOSTRAR ERROR DE LOGIN
  showAuthenticationError: (messageErr, form) => {
    const logInMessage = document.getElementById('loginMessage');
    logInMessage.innerHTML = messageErr;
    form.addEventListener('keydown', () => {
      logInMessage.innerHTML = '';
    });
  },
  // -- transformCurrentViewInDashToNumber: TRANSFORMA LA VISTA RECIENTE EN NUMERO
  transformCurrentViewInDashToNumber() {
    // Preparación, En Promoción, Tramite y Avalúo, Escritura
    const currentProgressStr = user.currentProgressDashViewStr;
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

};
export { vista };
