"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vista = exports.views = void 0;

var _controller = require("../controller/controller.js");

var _login = _interopRequireDefault(require("../pages/login.js"));

var _registry = _interopRequireDefault(require("../pages/registry.js"));

var _dash = _interopRequireDefault(require("../pages/dash.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-cycle
// importo todas las vistas
// exporto mi objeto views y vista / es importado en controller.
// creo un objeto con propiedades que contienen
// una pagina/funcion ocea que son metodos del objeto views
var views = {
  login: _login["default"],
  registry: _registry["default"],
  dash: _dash["default"]
}; // creo un objeto llamado vista este mandara la informacion de las interfaces al controller.

exports.views = views;
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
  }
};
exports.vista = vista;