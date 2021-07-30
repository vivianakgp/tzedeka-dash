"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardViews = exports.vista = exports.views = void 0;

var _controller = require("../controller/controller.js");

var _login = _interopRequireDefault(require("../pages/login.js"));

var _registry = _interopRequireDefault(require("../pages/registry.js"));

var _dash = _interopRequireDefault(require("../pages/dash.js"));

var _preparacion = _interopRequireDefault(require("../pages/components-dash/views-dash/preparacion.js"));

var _promocion = _interopRequireDefault(require("../pages/components-dash/views-dash/promocion.js"));

var _tramite = _interopRequireDefault(require("../pages/components-dash/views-dash/tramite.js"));

var _escritura = _interopRequireDefault(require("../pages/components-dash/views-dash/escritura.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-cycle
// views
// eslint-disable-next-line import/no-cycle
// views on dashboard
var currentProgressStr = 'Escritura'; // Preparación, En Promoción, Tramite y Avalúo, Escritura

var views = {
  login: _login["default"],
  registry: _registry["default"],
  dash: _dash["default"]
};
exports.views = views;
var dashboardViews = {
  preparacion: _preparacion["default"],
  promocion: _promocion["default"],
  tramite: _tramite["default"],
  escritura: _escritura["default"]
};
exports.dashboardViews = dashboardViews;
var vista = {
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
      return _controller.controller.logInAuth(userData);
    });
  },
  // -- transformCurrentProgressToNumber: TRANSFORMA LA VISTA RECIENTE EN NUMERO
  transformCurrentProgressToNumber: function transformCurrentProgressToNumber() {
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
        return 404;
      // show pag 404
    }
  } //

};
exports.vista = vista;