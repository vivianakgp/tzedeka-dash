"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methodsDesktop = void 0;
// todos los metodos de desktop
// eslint-disable-next-line import/no-cycle
// import { vista } from '../vista/vista.js';
var methodsDesktop = {
  // --  addEventClickBtnDash: AGREGA EVENTOS EN LOS BTN DE progressStatusBar EN DESKTOP
  addEventClickBtnDashInDesktop: function addEventClickBtnDashInDesktop() {
    var buttonsProgressStatusBar = document.getElementsByClassName('btnProgressStatusBar');
    Array.prototype.forEach.call(buttonsProgressStatusBar, function (btn) {
      btn.addEventListener('click', function (evt) {
        methodsDesktop.progressStatusBarChangeOfViews(evt);
      });
    });
  },
  // -- progressStatusBarChangeOfViews: ABRE DASH VIEW SEGUN EL  BTN
  // QUE DISPARO EL EVENTO EN DESKTOP
  progressStatusBarChangeOfViews: function progressStatusBarChangeOfViews(evt) {
    var progress = evt.target.dataset.progress;
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = ''; // eslint-disable-next-line default-case

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
  }
};
exports.methodsDesktop = methodsDesktop;