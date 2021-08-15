"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methodsDesktop = void 0;

var _vista = require("../vista/vista.js");

// todos los metodos de desktop
// eslint-disable-next-line import/no-cycle
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
        blackboard.appendChild(_vista.vista.dashboardViews.preparacion);
        break;

      case '2':
        blackboard.appendChild(_vista.vista.dashboardViews.promocion);
        break;

      case '3':
        blackboard.appendChild(_vista.vista.dashboardViews.tramite);
        break;

      case '4':
        blackboard.appendChild(_vista.vista.dashboardViews.escritura);
        break;
    }
  }
};
exports.methodsDesktop = methodsDesktop;