// todos los metodos de desktop
// eslint-disable-next-line import/no-cycle
import { vista } from '../vista/vista.js';

export const methodsDesktop = {
  // --  addEventClickBtnDash: AGREGA EVENTOS EN LOS BTN DE progressStatusBar EN DESKTOP
  addEventClickBtnDashInDesktop: () => {
    const buttonsProgressStatusBar = document.getElementsByClassName('btnProgressStatusBar');
    Array.prototype.forEach.call(buttonsProgressStatusBar, (btn) => {
      btn.addEventListener('click', (evt) => { methodsDesktop.progressStatusBarChangeOfViews(evt); });
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
};
