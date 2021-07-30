"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardViews = exports.vista = exports.views = void 0;

var _controller = require("../controller/controller.js.js.js.js");

var _login = _interopRequireDefault(require("../pages/login.js.js.js.js"));

var _registry = _interopRequireDefault(require("../pages/registry.js.js.js.js"));

var _dash = _interopRequireDefault(require("../pages/dash.js.js.js.js"));

var _preparacion = _interopRequireDefault(require("../pages/components-dash/views-dash/preparacion.js.js.js.js"));

var _promocion = _interopRequireDefault(require("../pages/components-dash/views-dash/promocion.js.js.js.js"));

var _tramite = _interopRequireDefault(require("../pages/components-dash/views-dash/tramite.js.js.js.js"));

var _escritura = _interopRequireDefault(require("../pages/components-dash/views-dash/escritura.js.js.js.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-cycle
// views
// eslint-disable-next-line import/no-cycle
// views on dashboard
// creo un objeto views con propiedades que contienen
// una pagina/funcion ocea que son metodos del objeto views
var currentProgressStr = 'Preparación'; // Preparación, En Promoción, Tramite y Avalúo, Escritura

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
}; // creo un objeto llamado vista este mandara la informacion de las interfaces al controller.

exports.dashboardViews = dashboardViews;
var vista = {
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
  transformCurrentProgressToNumber: function transformCurrentProgressToNumber() {
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
        return 404;
      // show pag 404
    }
  },
  // metodo que agregue el evento a los dos botones del dash en celular
  addEventClickBtnDashOnCell: function addEventClickBtnDashOnCell() {
    var btnNextProgressView = document.getElementById('btnNextProgressView');
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    btnNextProgressView.addEventListener('click', _controller.controller.traversesArrayForward);
    btnPreviousProgressView.addEventListener('click', _controller.controller.progressArrayBackwards); // btnPreviousProgressView.addEventListener('click', controller.test);
  },
  removeEventClickBtnDashOnCell: function removeEventClickBtnDashOnCell() {
    var btnNextProgressView = document.getElementById('btnNextProgressView');
    btnNextProgressView.removeEventListener('click', _controller.controller.traversesArrayForward);
  }
};
exports.vista = vista;