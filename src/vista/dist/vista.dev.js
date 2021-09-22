"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _login = _interopRequireDefault(require("../pages/login.js"));

var _dash = require("../pages/dash.js");

var _preparacion = _interopRequireDefault(require("../pages/components-dash/views-dash/preparacion.js"));

var _promocion = _interopRequireDefault(require("../pages/components-dash/views-dash/promocion.js"));

var _tramite = _interopRequireDefault(require("../pages/components-dash/views-dash/tramite.js"));

var _escritura = _interopRequireDefault(require("../pages/components-dash/views-dash/escritura.js"));

var _commentsModal = _interopRequireDefault(require("../pages/components-dash/components/menu-modals/comments-modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// main views
// views on dashboard
var _default = {
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
  modals: {
    commentsModal: _commentsModal["default"]
  },
  // -- showAuthenticationError: MOSTRAR ERROR DE LOGIN
  showAuthenticationError: function showAuthenticationError(messageErr, form) {
    var logInMessage = document.getElementById('loginMessage');
    logInMessage.innerHTML = messageErr;
    form.addEventListener('keydown', function () {
      logInMessage.innerHTML = '';
    });
  },
  // -- transformCurrentViewInDashToNumber: TRANSFORMA LA VISTA RECIENTE EN NUMERO
  transformCurrentViewInDashToNumber: function transformCurrentViewInDashToNumber() {
    // Preparación, En Promoción, Tramite y Avalúo, Escritura
    var currentProgressStr = _dash.user.currentProgressStr;

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
exports["default"] = _default;