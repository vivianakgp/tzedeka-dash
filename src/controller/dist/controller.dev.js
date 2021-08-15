"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;

var _vista = require("../vista/vista.js");

var _model = require("../model/model.js");

var _methodsDesk = require("./methodsDesk.js");

var _methodsCell = require("./methodsCell.js");

// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
// numberOfCurrentDashboardView: numero de vista para mostrar por defecto
var numberOfCurrentDashboardView = _vista.vista.transformCurrentViewInDashToNumber();

var controller = {
  // --  templateChange: DETECTA EL HASH Y CAMBIA LAS PRINCIPALES VISTAS
  changeMainView: function changeMainView(hash) {
    var mainSection = document.getElementById('container');
    mainSection.innerHTML = '';

    switch (hash) {
      case '':
        mainSection.appendChild(_vista.vista.mainViews.Login());

        _vista.vista.logIn();

        break;

      case '#/register':
        mainSection.appendChild(_vista.vista.mainViews.Registry());
        break;

      case '#/dashboard':
        mainSection.appendChild(_vista.vista.mainViews.Dash());
        controller.showCurrentProgressView();
        controller.clickBurgerMenu();

        _methodsDesk.methodsDesktop.addEventClickBtnDashInDesktop();

        _methodsCell.methodsCell.controllerBtnNextProgressViewInCell();

        _methodsCell.methodsCell.controllerBtnPreviousProgressViewInCell();

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
  // -- showCurrentProgressView: MUESTRA VISTA DE INICIO EN EL DASHBOARD
  showCurrentProgressView: function showCurrentProgressView() {
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    switch (numberOfCurrentDashboardView) {
      case 0:
        blackboard.appendChild(_vista.vista.dashboardViews.preparacion);
        break;

      case 1:
        blackboard.appendChild(_vista.vista.dashboardViews.promocion);
        break;

      case 2:
        blackboard.appendChild(_vista.vista.dashboardViews.tramite);
        break;

      case 3:
        blackboard.appendChild(_vista.vista.dashboardViews.escritura);
        break;

      default: // show pag err

    }
  },
  clickBurgerMenu: function clickBurgerMenu() {
    var burgerButton = document.getElementById('btnOpenMenu');
    console.log(burgerButton);
    burgerButton.addEventListener('click', function () {
      alert('burger btn');
    });
  }
};
exports.controller = controller;