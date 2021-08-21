"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;

var _vista = require("../vista/vista.js");

var _model = require("../model/model.js");

// numberOfCurrentDashboardView, numero de vista para mostrar por defecto
var numberOfCurrentDashboardView = _vista.vista.transformCurrentViewInDashToNumber(); // dashboardViews obj to array


var dashboardViews = _vista.vista.dashboardViews;
var arrayProgressViews = Object.values(dashboardViews);

var counter = _vista.vista.transformCurrentViewInDashToNumber();

var controller = {
  // --  templateChange: DETECTA EL HASH Y CAMBIA LAS PRINCIPALES VISTAS
  changeMainView: function changeMainView(hash) {
    var mainSection = document.getElementById('container');
    mainSection.innerHTML = '';

    switch (hash) {
      case '':
        mainSection.appendChild(_vista.vista.mainViews.Login());
        controller.logInAuth();
        break;

      case '#/register':
        mainSection.appendChild(_vista.vista.mainViews.Registry());
        break;

      case '#/dashboard':
        mainSection.appendChild(_vista.vista.mainViews.Dash());
        controller.showCurrentProgressView();
        controller.clickBurgerMenu();
        controller.addEventClickBtnDashInDesktop();
        controller.controllerBtnNextProgressViewInCell();
        controller.controllerBtnPreviousProgressViewInCell();
        break;

      default:
    }
  },
  // --  logInAuth: INICIA SESION
  logInAuth: function logInAuth() {
    var _this = this;

    var formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', function (e) {
      e.preventDefault();

      if (formLogin.email.value !== '' && formLogin.password.value !== '') {
        var userData = {
          email: formLogin.email.value,
          password: formLogin.password.value
        };

        _model.model.userAuth(userData).then(function () {
          window.location.hash = '#/dashboard';
          var hash = window.location.hash;
          window.addEventListener('hashchange', function () {
            _this.changeMainView(hash);
          });
          formLogin.reset();
        })["catch"](function (error) {
          var errorAuth = error.message;

          _vista.vista.showAuthenticationError(errorAuth, formLogin);
        });
      } else if (formLogin.email.value === '' || formLogin.password.value === '') {
        var messageErr = '¡Correo o contraseña vacia!';

        _vista.vista.showAuthenticationError(messageErr, formLogin);
      }
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
  },

  /**
   * METODOS PARA DESKTOP
   */
  // --  addEventClickBtnDash: AGREGA EVENTOS EN LOS BTN DE progressStatusBar EN DESKTOP
  addEventClickBtnDashInDesktop: function addEventClickBtnDashInDesktop() {
    var buttonsProgressStatusBar = document.getElementsByClassName('btnProgressStatusBar');
    Array.prototype.forEach.call(buttonsProgressStatusBar, function (btn) {
      btn.addEventListener('click', function (evt) {
        controller.progressStatusBarChangeOfViews(evt);
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
  },

  /**
   * METODOS EN CELLULAR
   */
  // -- traversesArrayForward: RECORRE arrayProgressViews ADELANTE.
  traversesArrayForward: function traversesArrayForward() {
    var btnNextProgressView = document.getElementById('btnNextProgressView');
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    btnPreviousProgressView.addEventListener('click', controller.travelsArrayBackwards);
    btnPreviousProgressView.classList.remove('hideBtn');
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    if (counter < arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[counter + 1]); // eslint-disable-next-line no-plusplus

      counter++;
    } else if (counter === arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[counter + 1]);
      btnNextProgressView.classList.add('hideBtn');
      btnNextProgressView.removeEventListener('click', controller.traversesArrayForward); // eslint-disable-next-line no-plusplus

      counter++;
    }
  },
  // -- progressArrayBackwards:RECORRE EL ARRAY DE VISTAS*/DASH ATRAS.
  travelsArrayBackwards: function travelsArrayBackwards() {
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    var btnNextProgressView = document.getElementById('btnNextProgressView');
    btnNextProgressView.addEventListener('click', controller.traversesArrayForward);
    btnNextProgressView.classList.remove('hideBtn');
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    if (counter === 1) {
      blackboard.appendChild(arrayProgressViews[counter - 1]);
      btnPreviousProgressView.classList.add('hideBtn');
      btnPreviousProgressView.removeEventListener('click', controller.travelsArrayBackwards); // eslint-disable-next-line no-plusplus

      counter--;
    } else {
      blackboard.appendChild(arrayProgressViews[counter - 1]); // eslint-disable-next-line no-plusplus

      counter--;
    }
  },
  //  controllerBtnNextProgressViewInCell: PRENDE Y APAGA EL BOTON NEXT.
  controllerBtnNextProgressViewInCell: function controllerBtnNextProgressViewInCell() {
    var btnNextProgressView = document.getElementById('btnNextProgressView');

    if (counter === arrayProgressViews.length - 1) {
      btnNextProgressView.removeEventListener('click', this.traversesArrayForward);
      btnNextProgressView.classList.add('hideBtn');
    } else {
      btnNextProgressView.addEventListener('click', this.traversesArrayForward);
    }
  },
  // controllerBtnPreviousProgressViewInCell : PRENDE Y APAGA EL BOTON PREVIOUS.
  controllerBtnPreviousProgressViewInCell: function controllerBtnPreviousProgressViewInCell() {
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');

    if (counter === 0) {
      btnPreviousProgressView.removeEventListener('click', this.travelsArrayBackwards);
      btnPreviousProgressView.classList.add('hideBtn');
    } else {
      btnPreviousProgressView.addEventListener('click', this.travelsArrayBackwards);
    }
  }
};
exports.controller = controller;