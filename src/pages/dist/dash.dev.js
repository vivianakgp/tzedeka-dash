"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboard = exports.user = void 0;

var _menu = _interopRequireDefault(require("./menu.js"));

var _progressStatusBarCell = _interopRequireDefault(require("./components-dash/componentsInCell/progressStatusBarCell.js"));

var _btnsChangeViewsToCell = _interopRequireDefault(require("./components-dash/componentsInCell/btnsChangeViewsToCell.js"));

var _progressStatusBar = _interopRequireDefault(require("./components-dash/components/progressStatusBar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Preparación, En Promoción, Tramite y Avalúo, Escritura
var user = {
  currentProgressDashViewStr: 'Escritura',
  name: 'David',
  linkPropertyPublication: 'http://localhost:5000/#/dashboard//localhost:5000/#/dashboard'
};
exports.user = user;

var dashboard = function dashboard() {
  /*
  * creating elements html *
  */
  var dash = document.createElement('div');
  var container = document.createElement('div');
  dash.setAttribute('class', 'dashboard');
  container.setAttribute('class', 'dash__container'); // button open menu

  var btnOpenMenu = document.createElement('img');
  btnOpenMenu.setAttribute('id', 'btnOpenMenu');
  btnOpenMenu.setAttribute('src', '../assets/menu-icons/burger_menu.svg');
  /*
  * main divisors *
  - userInfo
  - blackboard
  - IMPORTADO progressStatusBar element in tablet and desk
  - IMPORTADO progressStatusBarCell and btnsChangeViewsToCell elements only in cell
  */

  var userInfo = document.createElement('div');
  var blackboard = document.createElement('div'); // const progressStatusBar = document.createElement('div');
  //  adding classes to the main divisors

  userInfo.setAttribute('class', 'userInfo'); // progressStatusBar.setAttribute('class', 'progressStatusBar');

  blackboard.setAttribute('class', 'blackboard');
  blackboard.setAttribute('id', 'Blackboard');
  /*
  * userInfo children *
  - welcome
  - propertyLink only in desktop
  */

  var welcome = document.createElement('h1');
  var propertyLink = document.createElement('div');
  propertyLink.setAttribute('class', 'userInfo__propertyLink'); // welcome child

  var span = document.createElement('span');
  welcome.innerText = 'Bienvenido'; // span.innerText = user.name; solo en desktop
  // propertyLink children

  var link = document.createElement('p');
  var networkIcons = document.createElement('div'); // link.innerHTML = `Link de mi Propiedad: ${linkPropertyPublication}`;
  // propertyLink / networkIcons children
  // link.innerHTML = `Link de mi Propiedad: ${linkPropertyPublication}`;

  var iconWhats = document.createElement('img');
  var iconFace = document.createElement('img');
  var iconShare = document.createElement('img');
  iconWhats.setAttribute('src', '../assets/social-icons/icon_whatsApp.svg');
  iconFace.setAttribute('src', '../assets/social-icons/icon_facebook.svg');
  iconShare.setAttribute('src', '../assets/social-icons/icon_copy.svg');
  /*
   * progressStatusBar children *
   - blocks to tablet and desktop
   */
  // const block1 = document.createElement('div');
  // const block2 = document.createElement('div');
  // const block3 = document.createElement('div');
  // const block4 = document.createElement('div');
  //  blocks's children
  // const block1Title = document.createElement('span');
  // const block2Title = document.createElement('span');
  // const block3Title = document.createElement('span');
  // const block4Title = document.createElement('span');
  // const block1Btn = document.createElement('div');
  // const block2Btn = document.createElement('div');
  // const block3Btn = document.createElement('div');
  // const block4Btn = document.createElement('div');
  // block1Title.innerHTML = 'Preparación';
  // block2Title.innerHTML = 'En Promoción';
  // block3Title.innerHTML = 'Tramite y Avalúo';
  // block4Title.innerHTML = 'Escritura';
  // block1Btn.setAttribute('data-progress', '1');
  // block2Btn.setAttribute('data-progress', '2');
  // block3Btn.setAttribute('data-progress', '3');
  // block4Btn.setAttribute('data-progress', '4');
  // block1Btn.setAttribute('class', 'btnProgressStatusBar');
  // block2Btn.setAttribute('class', 'btnProgressStatusBar');
  // block3Btn.setAttribute('class', 'btnProgressStatusBar');
  // block4Btn.setAttribute('class', 'btnProgressStatusBar');

  /*
  * nesting *
  */

  dash.appendChild(container); // button open menu and menu

  container.appendChild(btnOpenMenu);
  container.appendChild((0, _menu["default"])()); //  main div

  container.appendChild(userInfo);
  container.appendChild((0, _progressStatusBarCell["default"])());
  container.appendChild((0, _progressStatusBar["default"])());
  container.appendChild(blackboard);
  container.appendChild((0, _btnsChangeViewsToCell["default"])()); // userInfo children

  userInfo.appendChild(welcome);
  userInfo.appendChild(propertyLink); //  userInfo welcome and propertyLink children

  welcome.appendChild(span);
  propertyLink.appendChild(link);
  propertyLink.appendChild(networkIcons); // propertyLink / networkIcons children

  networkIcons.appendChild(iconWhats);
  networkIcons.appendChild(iconFace);
  networkIcons.appendChild(iconShare); // progressStatusBar children
  // progressStatusBar.appendChild(block1);
  // progressStatusBar.appendChild(block2);
  // progressStatusBar.appendChild(block3);
  // progressStatusBar.appendChild(block4);
  // progressStatusBar / blocks's children
  // block1.appendChild(block1Title);
  // block1.appendChild(block1Btn);
  // block2.appendChild(block2Title);
  // block2.appendChild(block2Btn);
  // block3.appendChild(block3Title);
  // block3.appendChild(block3Btn);
  // block4.appendChild(block4Title);
  // block4.appendChild(block4Btn);

  return dash;
};

exports.dashboard = dashboard;