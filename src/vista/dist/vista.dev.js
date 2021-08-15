"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vista = void 0;

var _controller = require("../controller/controller.js");

var _login = _interopRequireDefault(require("../pages/login.js"));

var _dash = require("../pages/dash.js");

var _preparacion = _interopRequireDefault(require("../pages/components-dash/views-dash/preparacion.js"));

var _promocion = _interopRequireDefault(require("../pages/components-dash/views-dash/promocion.js"));

var _tramite = _interopRequireDefault(require("../pages/components-dash/views-dash/tramite.js"));

var _escritura = _interopRequireDefault(require("../pages/components-dash/views-dash/escritura.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-cycle
// main views
// import Registry from '../pages/registry.js';
// views on dashboard
var vista = {
  mainViews: {
    Login: _login["default"],
    Dash: _dash.dashboard
  },
  dashboardViews: {
    preparacion: (0, _preparacion["default"])(),
    promocion: (0, _promocion["default"])(),
    tramite: (0, _tramite["default"])(),
    escritura: (0, _escritura["default"])()
  },
  // -- logIn:INICIA SESION
  logIn: function logIn() {
    var formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', function (e) {
      e.preventDefault();
      var userData = {
        email: formLogin.email.value,
        password: formLogin.password.value
      };
      formLogin.reset();
      return _controller.controller.logInAuth(userData); // arreglar esta parte para que no sea llamado el controlador
    });
  },
  // -- transformCurrentViewInDashToNumber: TRANSFORMA LA VISTA RECIENTE EN NUMERO
  transformCurrentViewInDashToNumber: function transformCurrentViewInDashToNumber() {
    // Preparación, En Promoción, Tramite y Avalúo, Escritura
    var currentProgressStr = _dash.user.currentProgressDashViewStr;

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
        return 404;
      // show pag 404
    }
  }
};
exports.vista = vista;