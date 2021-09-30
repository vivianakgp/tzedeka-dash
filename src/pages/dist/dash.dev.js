"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboard = exports.user = void 0;

var _menu = _interopRequireDefault(require("./components-dash/components/menu.js"));

var _progressStatusBarCell = _interopRequireDefault(require("./components-dash/componentsInCell/progressStatusBarCell.js"));

var _btnsChangeViewsToCell = _interopRequireDefault(require("./components-dash/componentsInCell/btnsChangeViewsToCell.js"));

var _progressStatusBar = _interopRequireDefault(require("./components-dash/components/progressStatusBar.js"));

var _userInfo = _interopRequireDefault(require("./components-dash/components/userInfo.js"));

var _commentsModal = _interopRequireDefault(require("./components-dash/components/menu-modals/comments-modal.js"));

var _modalShareLink = _interopRequireDefault(require("./components-dash/components/menu-modals/modalShareLink.js"));

var _modalRefer = _interopRequireDefault(require("./components-dash/components/menu-modals/modalRefer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Preparación, En Promoción, Tramite y Avalúo, Escritura
var user = {
  currentProgressStr: 'Tramite y Avalúo',
  userName: 'Juan',
  propLink: 'https://www.inmuebles24.com/inmuebles.html'
};
exports.user = user;
var userName = user.userName,
    currentProgressStr = user.currentProgressStr,
    propLink = user.propLink;

var dashboard = function dashboard() {
  var dash = document.createElement('div');
  var container = document.createElement('div');
  dash.setAttribute('class', 'dashboard');
  container.setAttribute('class', 'dash__container');
  container.setAttribute('id', 'dashboard'); // button open menu

  var btnOpenMenu = document.createElement('img');
  btnOpenMenu.setAttribute('id', 'btnOpenMenu');
  btnOpenMenu.setAttribute('src', '../assets/menu-icons/burger_menu.svg');
  /*
  * main divisors *
  - blackboard
  - IMPORTADO userInfo
  - IMPORTADO progressStatusBar element in tablet and desk
  - IMPORTADO progressStatusBarCell and btnsChangeViewsToCell elements only in cell
  */

  var blackboard = document.createElement('div');
  blackboard.setAttribute('class', 'blackboard');
  blackboard.setAttribute('id', 'Blackboard');
  /*
  * nesting *
  */

  dash.appendChild(container); // button open menu and menu

  container.appendChild(btnOpenMenu);
  container.appendChild((0, _menu["default"])());
  container.appendChild((0, _commentsModal["default"])());
  container.appendChild((0, _modalShareLink["default"])(propLink));
  container.appendChild((0, _modalRefer["default"])()); //  main div

  container.appendChild((0, _userInfo["default"])(userName, propLink));
  container.appendChild((0, _progressStatusBarCell["default"])(currentProgressStr));
  container.appendChild((0, _progressStatusBar["default"])(currentProgressStr));
  container.appendChild(blackboard);
  container.appendChild((0, _btnsChangeViewsToCell["default"])());
  return dash;
};

exports.dashboard = dashboard;