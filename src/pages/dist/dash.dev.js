"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _menu = _interopRequireDefault(require("./menu.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable prefer-const */
var name = ' name';
var link = 'http://localhost:5000/#/dashboard';
var menu = (0, _menu["default"])(); // ojo con este no se si sea correcto ponerlo fuera de mi funcion

var _default = function _default() {
  var dash = document.createElement('div');
  var container = document.createElement('div');
  dash.setAttribute('class', 'dashboard');
  container.setAttribute('class', 'dash__container'); // // //

  var btnOpenMenu = document.createElement('button');
  btnOpenMenu.setAttribute('class', 'btnOpenMenu'); // main divs

  var divUserInf = document.createElement('div');
  var divProgressBar = document.createElement('div');
  var divBoard = document.createElement('div');
  divUserInf.setAttribute('class', 'container__div divUserInf');
  divProgressBar.setAttribute('class', 'container__div divProgressBar');
  divBoard.setAttribute('class', 'container__div divBoard'); // divUserInf elements

  var welcomeName = document.createElement('h1');
  var divShareLink = document.createElement('div'); // children

  welcomeName.innerText = 'Welcome';
  var span = document.createElement('span');
  span.innerText = "  ".concat(name);
  divShareLink.innerHTML = "Link de mi Propiedad: ".concat(link);
  var iconWhats = document.createElement('img');
  iconWhats.setAttribute('src', '../assets/social-icons/icon_whatsapp.png');
  var iconFace = document.createElement('img');
  iconFace.setAttribute('src', '../assets/social-icons/icon_facebook.png');
  var iconShare = document.createElement('img');
  iconShare.setAttribute('src', '../assets/social-icons/Vector.png'); // divProgressBar elements

  var block1 = document.createElement('div');
  var block2 = document.createElement('div');
  var block3 = document.createElement('div');
  var block4 = document.createElement('div'); // children

  var block1Title = document.createElement('span');
  var Block1Div = document.createElement('div');
  block1Title.innerHTML = 'Preparación';
  var block2Title = document.createElement('span');
  var Block2Div = document.createElement('div');
  block2Title.innerHTML = 'En Promoción';
  var block3Title = document.createElement('span');
  var Block3Div = document.createElement('div');
  block3Title.innerHTML = 'Tramite y Avalúo';
  var block4Title = document.createElement('span');
  var Block4Div = document.createElement('div');
  block4Title.innerHTML = 'Escritura';
  btnOpenMenu.addEventListener('click', function () {
    menu.classList.remove('is__active');
  });
  dash.appendChild(menu); //  dash first child container

  dash.appendChild(container); // btn open menu

  container.appendChild(btnOpenMenu); //  main divs

  container.appendChild(divUserInf);
  container.appendChild(divProgressBar);
  container.appendChild(divBoard); // divUserInf  elements

  divUserInf.appendChild(welcomeName);
  divUserInf.appendChild(divShareLink); // children

  welcomeName.appendChild(span);
  divShareLink.appendChild(iconWhats);
  divShareLink.appendChild(iconFace);
  divShareLink.appendChild(iconShare); // divProgressBar elements

  divProgressBar.appendChild(block1);
  divProgressBar.appendChild(block2);
  divProgressBar.appendChild(block3);
  divProgressBar.appendChild(block4); // children

  block1.appendChild(block1Title);
  block1.appendChild(Block1Div);
  block2.appendChild(block2Title);
  block2.appendChild(Block2Div);
  block3.appendChild(block3Title);
  block3.appendChild(Block3Div);
  block4.appendChild(block4Title);
  block4.appendChild(Block4Div);
  return dash;
};

exports["default"] = _default;