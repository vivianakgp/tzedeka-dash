"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;

var _index = require("../view/index.js");

var _model = require("../model/model.js");

// eslint-disable-next-line import/no-cycle
var preparacion = _index.dashboardViews.preparacion();

var promocion = _index.dashboardViews.promocion();

var tramite = _index.dashboardViews.tramite();

var escritura = _index.dashboardViews.escritura();

var arrayProgressViews = [preparacion, promocion, tramite, escritura]; // creamos un objeto que controla las vistas las ejecuta segun el tipo de hash en el navegador.
// controla la informacion que pasa de la vista al modelo y viceversa
// nuestro objeto se llama contoller y tiene una propiedad que contiene una funcion(metodo)
// exporto el objeto cotroller/ es importado en main.js, model y vista.

var currentProgressNumber = _index.vista.transformCurrentProgressToNumber();

var Counter = currentProgressNumber;
console.log("".concat(Counter, " :valor del contador"));
var controller = {
  templateChange: function templateChange(hash) {
    // hash es pasado como parametro enviado desde la funcion initial con window.location.hash
    var mainSection = document.getElementById('container');
    mainSection.innerHTML = ' ';

    switch (hash) {
      case '':
        mainSection.appendChild(_index.views.login());

        _index.vista.logIn();

        break;

      case '#/register':
        mainSection.appendChild(_index.views.registry());
        break;

      case '#/dashboard':
        mainSection.appendChild(_index.views.dash());
        controller.showCurrentProgressView();

        _index.vista.addEventClickBtnDashOnCell();

        break;

      default:
    }
  },
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
  getCurrentUser: function getCurrentUser() {
    _model.model.getCurrentUser(function (user) {
      if (user) {
        console.log('El usuario ha iniciado la sesión.'.concat(user));
      } else {
        console.log('Ningún usuario está registrado');
      }
    });
  },
  showCurrentProgressView: function showCurrentProgressView() {
    console.log("".concat(currentProgressNumber, " :valor de vista a mostrar"));
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    switch (currentProgressNumber) {
      case 0:
        blackboard.appendChild(_index.dashboardViews.preparacion());
        break;

      case 1:
        blackboard.appendChild(_index.dashboardViews.promocion());
        break;

      case 2:
        blackboard.appendChild(_index.dashboardViews.tramite());
        break;

      case 3:
        blackboard.appendChild(_index.dashboardViews.escritura());
        break;

      default: // show pag err

    }
  },
  // metodo para contolar la vista del boton previous progress en dash cell
  traversesArrayForward: function traversesArrayForward() {
    console.log('evento click activado');
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    if (Counter < arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[Counter + 1]); // eslint-disable-next-line no-plusplus

      Counter++;
      console.log("".concat(Counter, " :valor del contador al plusplus"));
    } else if (Counter === arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[Counter + 1]);

      _index.vista.removeEventClickBtnDashOnCell();
    }
  },
  progressArrayBackwards: function progressArrayBackwards() {
    var blackboard = document.getElementById('Blackboard');

    if (Counter === 0) {
      // eslint-disable-next-line no-plusplus
      Counter++;
    } else if (Counter > 0) {
      blackboard.innerHTML = '';
      blackboard.appendChild(arrayProgressViews[Counter - 1]); // eslint-disable-next-line no-plusplus

      Counter--;
    }
  } // test: () => {
  //   alert('evento');
  // },

};
exports.controller = controller;