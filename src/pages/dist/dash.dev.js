"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.dashboard = void 0;

var _menu = _interopRequireDefault(require("./menu.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Preparación, En Promoción, Tramite y Avalúo, Escritura
var user = {
  currentProgressDashViewStr: 'Preparación',
  name: 'David',
  linkPropertyPublication: 'http://localhost:5000/#/dashboard//localhost:5000/#/dashboard'
};
exports.user = user;
var menu = (0, _menu["default"])(); // ojo con este no se si sea correcto ponerlo fuera de mi funcion

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
  - progressStatusBar
  - blackboard
  - progressStatusBarCell and btnsChangeViewsToCell elements only in cell
  */

  var userInfo = document.createElement('div');
  var progressStatusBar = document.createElement('div');
  var blackboard = document.createElement('div');
  var progressStatusBarCell = document.createElement('div');
  var btnsChangeViewsToCell = document.createElement('div'); //  adding classes to the main divisors

  userInfo.setAttribute('class', 'userInfo');
  progressStatusBar.setAttribute('class', 'progressStatusBar');
  blackboard.setAttribute('class', 'blackboard');
  blackboard.setAttribute('id', 'Blackboard');
  progressStatusBarCell.setAttribute('class', 'progressStatusBarCell');
  btnsChangeViewsToCell.setAttribute('class', 'btnsChangeViewsToCell');
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

  var block1 = document.createElement('div');
  var block2 = document.createElement('div');
  var block3 = document.createElement('div');
  var block4 = document.createElement('div'); //  blocks's children

  var block1Title = document.createElement('span');
  var block2Title = document.createElement('span');
  var block3Title = document.createElement('span');
  var block4Title = document.createElement('span');
  var block1Btn = document.createElement('div');
  var block2Btn = document.createElement('div');
  var block3Btn = document.createElement('div');
  var block4Btn = document.createElement('div');
  block1Title.innerHTML = 'Preparación';
  block2Title.innerHTML = 'En Promoción';
  block3Title.innerHTML = 'Tramite y Avalúo';
  block4Title.innerHTML = 'Escritura';
  block1Btn.setAttribute('data-progress', '1');
  block2Btn.setAttribute('data-progress', '2');
  block3Btn.setAttribute('data-progress', '3');
  block4Btn.setAttribute('data-progress', '4');
  block1Btn.setAttribute('class', 'btnProgressStatusBar');
  block2Btn.setAttribute('class', 'btnProgressStatusBar');
  block3Btn.setAttribute('class', 'btnProgressStatusBar');
  block4Btn.setAttribute('class', 'btnProgressStatusBar');
  /*
  * progressStatusBarCell children *
  - only in cell
  */

  var progressStatusCell = document.createElement('div');
  progressStatusCell.setAttribute('class', 'progressStatusBarCell__status');
  progressStatusCell.innerText = user.currentProgressDashViewStr;
  /*
  * btnsChangeViewsToCell children *
  - only in cell
  */

  var btnPreviousProgressView = document.createElement('button');
  var btnNextProgressView = document.createElement('button');
  btnNextProgressView.setAttribute('id', 'btnNextProgressView');
  btnNextProgressView.setAttribute('class', 'btnsChangeViews');
  btnNextProgressView.innerHTML = 'Siguiente';
  btnPreviousProgressView.setAttribute('id', 'btnPreviousProgressView');
  btnPreviousProgressView.setAttribute('class', 'btnsChangeViews');
  btnPreviousProgressView.innerHTML = 'Anterior';
  /*
  * nesting *
  */

  dash.appendChild(container);
  dash.appendChild(menu); // button open menu

  container.appendChild(btnOpenMenu); //  main div

  container.appendChild(userInfo);
  container.appendChild(progressStatusBarCell);
  container.appendChild(progressStatusBar);
  container.appendChild(blackboard);
  container.appendChild(btnsChangeViewsToCell); // userInfo children

  userInfo.appendChild(welcome);
  userInfo.appendChild(propertyLink); //  userInfo welcome and propertyLink children

  welcome.appendChild(span);
  propertyLink.appendChild(link);
  propertyLink.appendChild(networkIcons); // propertyLink / networkIcons children

  networkIcons.appendChild(iconWhats);
  networkIcons.appendChild(iconFace);
  networkIcons.appendChild(iconShare); // progressStatusBar children

  progressStatusBar.appendChild(block1);
  progressStatusBar.appendChild(block2);
  progressStatusBar.appendChild(block3);
  progressStatusBar.appendChild(block4); // progressStatusBar / blocks's children

  block1.appendChild(block1Title);
  block1.appendChild(block1Btn);
  block2.appendChild(block2Title);
  block2.appendChild(block2Btn);
  block3.appendChild(block3Title);
  block3.appendChild(block3Btn);
  block4.appendChild(block4Title);
  block4.appendChild(block4Btn); // progressStatusBarCell children

  progressStatusBarCell.appendChild(progressStatusCell); // btnsChangeViewsToCell children

  btnsChangeViewsToCell.appendChild(btnPreviousProgressView);
  btnsChangeViewsToCell.appendChild(btnNextProgressView);
  return dash;
};

exports.dashboard = dashboard;