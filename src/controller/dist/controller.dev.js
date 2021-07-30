"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;

var _vista = require("../vista/vista.js");

var _model = require("../model/model.js");

/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
var preparacion = _vista.dashboardViews.preparacion();

var promocion = _vista.dashboardViews.promocion();

var tramite = _vista.dashboardViews.tramite();

var escritura = _vista.dashboardViews.escritura();

var arrayProgressViews = [preparacion, promocion, tramite, escritura];

var currentProgressNumber = _vista.vista.transformCurrentProgressToNumber();

var Counter = currentProgressNumber;
console.log("".concat(Counter, " :valor del contador"));
var controller = {
  // --  templateChange: DETECTA EL HASH Y CAMBIA LA VISTA
  templateChange: function templateChange(hash) {
    var mainSection = document.getElementById('container');
    mainSection.innerHTML = ' ';

    switch (hash) {
      case '':
        mainSection.appendChild(_vista.views.login());

        _vista.vista.logIn();

        break;

      case '#/register':
        mainSection.appendChild(_vista.views.registry());
        break;

      case '#/dashboard':
        mainSection.appendChild(_vista.views.dash());
        controller.showCurrentProgressView();
        controller.addEventClickBtnDashInCell();
        controller.addEventClickBtnDashInDesktop();
        break;

      default:
    }
  },
  // --  logInAuth: CIERRA SESION
  logInAuth: function logInAuth(userData) {
    return _model.model.logInAuth(userData).then(function () {
      // location.hash='#/register';
      // eslint-disable-next-line no-console
      console.log('obten el id del usuario');
      controller.getCurrentUser(); // controller.templateChange('#/register');
    })["catch"](function (error) {
      var errorCode = error.errorCode;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        // eslint-disable-next-line no-alert
        alert('Wrong password.');
      } else {
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      } // eslint-disable-next-line no-console


      console.log(error);
    });
  },
  // -- getCurrentUser: DETECTA EL ID USER
  getCurrentUser: function getCurrentUser() {
    _model.model.getCurrentUser(function (user) {
      if (user) {
        console.log('El usuario ha iniciado la sesión.'.concat(user));
      } else {
        console.log('Ningún usuario está registrado');
      }
    });
  },
  // -- showCurrentProgressView: MUESTRA LA VISTA* POR DEFAULT QUE LE CORRESPONDE EN EL DASH
  showCurrentProgressView: function showCurrentProgressView() {
    console.log("".concat(currentProgressNumber, " :valor de vista a mostrar"));
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    switch (currentProgressNumber) {
      case 0:
        blackboard.appendChild(_vista.dashboardViews.preparacion());
        break;

      case 1:
        blackboard.appendChild(_vista.dashboardViews.promocion());
        break;

      case 2:
        blackboard.appendChild(_vista.dashboardViews.tramite());
        break;

      case 3:
        blackboard.appendChild(_vista.dashboardViews.escritura());
        break;

      default: // show pag err

    }
  },
  // -- traversesArrayForward: RECORRE EL ARRAY DE VISTAS*/DASH ADELANTE
  traversesArrayForward: function traversesArrayForward() {
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    if (Counter < arrayProgressViews.length - 1) {
      blackboard.appendChild(arrayProgressViews[Counter + 1]); // eslint-disable-next-line no-plusplus

      Counter++;
      console.log("".concat(Counter, " :valor del contador al plusplus"));
    } else if (Counter === arrayProgressViews.length - 1) {
      blackboard.appendChild(arrayProgressViews[Counter]);
      console.log("".concat(Counter, " : debe de ser 3"));
      controller.removeEventClickBtnNextProgressViewInCell();
    }
  },
  // -- progressArrayBackwards:RECORRE EL ARRAY DE VISTAS*/DASH A TRAS
  progressArrayBackwards: function progressArrayBackwards() {
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    if (Counter === 0) {
      blackboard.appendChild(arrayProgressViews[Counter]);
      console.log('contador es igual a 0, :)');
      controller.removeEventClickBtnPreviousProgressViewInCell();
      console.log("".concat(Counter, " :valor del contador al--"));
    } else {
      blackboard.appendChild(arrayProgressViews[Counter - 1]); // eslint-disable-next-line no-plusplus

      Counter--;
      console.log("".concat(Counter, " :valor del contador al--"));
    }
  },
  // -- addEventClickBtnDashOnCell: AGREGA LOS EVENTOS PARA CAMBIAR
  // DE VISTA* EN LOS BTN DEL DASH SOLO EN CELL
  addEventClickBtnDashInCell: function addEventClickBtnDashInCell() {
    var btnNextProgressView = document.getElementById('btnNextProgressView');
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    btnNextProgressView.addEventListener('click', controller.traversesArrayForward);
    btnPreviousProgressView.addEventListener('click', controller.progressArrayBackwards);
  },
  // -- REMUEVEN EVENTOS CLICK EN BTN CELL
  removeEventClickBtnNextProgressViewInCell: function removeEventClickBtnNextProgressViewInCell() {
    var btnNextProgressView = document.getElementById('btnNextProgressView');
    btnNextProgressView.removeEventListener('click', controller.traversesArrayForward);
  },
  removeEventClickBtnPreviousProgressViewInCell: function removeEventClickBtnPreviousProgressViewInCell() {
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    btnPreviousProgressView.removeEventListener('click', controller.progressArrayBackwards);
  },
  // --  addEventClickBtnDash: AGREGA EVENTOS EN LOS BTN DE progressStatusBar EN DESKTOP
  addEventClickBtnDashInDesktop: function addEventClickBtnDashInDesktop() {
    var buttonsProgressStatusBar = document.getElementsByClassName('btnProgressStatusBar');
    Array.prototype.forEach.call(buttonsProgressStatusBar, function (btn) {
      btn.addEventListener('click', function (evt) {
        controller.progressStatusBarChangeOfViews(evt);
      });
    });
  },
  // -- progressStatusBarChangeOfViews: ABRE VISTA DEL BOTON QUE DISPARO EL EVENTO CLICK
  progressStatusBarChangeOfViews: function progressStatusBarChangeOfViews(evt) {
    var progress = evt.target.dataset.progress;
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = ''; // eslint-disable-next-line default-case

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
  }
};
exports.controller = controller;