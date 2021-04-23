"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _menu = _interopRequireDefault(require("./menu.js"));

var _preparacion = _interopRequireDefault(require("./components-dash/views-dash/preparacion.js"));

var _promocion = _interopRequireDefault(require("./components-dash/views-dash/promocion.js"));

var _tramite = _interopRequireDefault(require("./components-dash/views-dash/tramite.js"));

var _escritura = _interopRequireDefault(require("./components-dash/views-dash/escritura.js"));

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
  var block1Div = document.createElement('div');
  var block2Title = document.createElement('span');
  var block2Div = document.createElement('div');
  var block3Title = document.createElement('span');
  var block3Div = document.createElement('div');
  var block4Title = document.createElement('span');
  var block4Div = document.createElement('div');
  block1Title.innerHTML = 'Preparación';
  block1Div.setAttribute('data-progress', '1');
  block2Title.innerHTML = 'En Promoción';
  block2Div.setAttribute('data-progress', '2');
  block3Title.innerHTML = 'Tramite y Avalúo';
  block3Div.setAttribute('data-progress', '3');
  block4Title.innerHTML = 'Escritura';
  block4Div.setAttribute('data-progress', '4'); // events

  btnOpenMenu.addEventListener('click', function () {
    menu.classList.remove('is__active');
  });

  function openView(e) {
    var progress = e.target.dataset.progress;
    console.log(progress);
    divBoard.innerHTML = '';

    switch (progress) {
      case '1':
        divBoard.appendChild((0, _preparacion["default"])());
        break;

      case '2':
        divBoard.appendChild((0, _promocion["default"])());
        break;

      case '3':
        divBoard.appendChild((0, _tramite["default"])());
        break;

      case '4':
        divBoard.appendChild((0, _escritura["default"])());

      default:
    }
  }

  block1Div.addEventListener('click', openView);
  block2Div.addEventListener('click', openView);
  block3Div.addEventListener('click', openView);
  block4Div.addEventListener('click', openView);
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
  block1.appendChild(block1Div);
  block2.appendChild(block2Title);
  block2.appendChild(block2Div);
  block3.appendChild(block3Title);
  block3.appendChild(block3Div);
  block4.appendChild(block4Title);
  block4.appendChild(block4Div);
  return dash;
};

exports["default"] = _default;