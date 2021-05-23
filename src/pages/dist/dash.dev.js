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

/*
* Import all the views
*/
var currentProgress = 'En Promoción';
var userName = ' name';
var linkPropertyPublication = 'http://localhost:5000/#/dashboard';
var menu = (0, _menu["default"])(); // ojo con este no se si sea correcto ponerlo fuera de mi funcion

/*
 * create an array of progress views
 */

var preparacion = (0, _preparacion["default"])();
var promocion = (0, _promocion["default"])();
var tramite = (0, _tramite["default"])();
var escritura = (0, _escritura["default"])();
var progressViews = [preparacion, promocion, tramite, escritura];
var Counter = 0;

var _default = function _default() {
  /*
  * creating elements html *
  */
  var dash = document.createElement('div');
  var container = document.createElement('div');
  dash.setAttribute('class', 'dashboard');
  container.setAttribute('class', 'dash__container'); // button oppen/close menu

  var btnOpenMenu = document.createElement('button');
  btnOpenMenu.setAttribute('class', 'btnOpenMenu');
  /*
  * main divisors *
  - progressStatusBar and btnsChangeViewsToCell elements only in cell
  */

  var userInfo = document.createElement('div');
  var progressStatusBar = document.createElement('div');
  var blackboard = document.createElement('div');
  var progressStatusBarCell = document.createElement('div');
  var btnsChangeViewsToCell = document.createElement('div'); // add classes

  userInfo.setAttribute('class', 'userInfo');
  progressStatusBar.setAttribute('class', 'progressStatusBar');
  blackboard.setAttribute('class', 'blackboard');
  progressStatusBarCell.setAttribute('class', 'progressStatusBarCell');
  btnsChangeViewsToCell.setAttribute('class', 'btnsChangeViewsToCell');
  /*
  * userInfo children *
  - share link only in desktop
  */
  // welcome name

  var welcome = document.createElement('h1');
  var span = document.createElement('span');
  welcome.innerText = 'Bienvenido';
  span.innerText = "".concat(userName); // share link

  var propertyLink = document.createElement('div');
  propertyLink.innerHTML = "Link de mi Propiedad: ".concat(linkPropertyPublication);
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
  block4Div.setAttribute('data-progress', '4');
  /*
  * progressStatusBarCell children *
  - only in cell
  */

  var progressStatusCell = document.createElement('div');
  progressStatusCell.setAttribute('class', 'progressStatusBarCell__status');
  progressStatusCell.innerText = "".concat(currentProgress);
  /*
  * btnsChangeViewsToCell children *
  - only in cell
  */

  var btnPreviousProgressView = document.createElement('button');
  var btnNextProgressView = document.createElement('button'); // btnNextProgressView.setAttribute('class', 'btnNextProgressView');
  // btnPreviousProgressView.setAttribute('class', 'btnPreviousProgressView');

  /*
  * nesting *
  */

  dash.appendChild(container);
  dash.appendChild(menu); // button

  container.appendChild(btnOpenMenu); //  main div

  container.appendChild(userInfo);
  container.appendChild(progressStatusBarCell);
  container.appendChild(progressStatusBar);
  container.appendChild(blackboard);
  container.appendChild(btnsChangeViewsToCell); // userInfo children

  userInfo.appendChild(welcome);
  userInfo.appendChild(propertyLink); //  userInfo welcome name / share link children

  welcome.appendChild(span);
  propertyLink.appendChild(iconWhats);
  propertyLink.appendChild(iconFace);
  propertyLink.appendChild(iconShare); // progressStatusBar children

  progressStatusBar.appendChild(block1);
  progressStatusBar.appendChild(block2);
  progressStatusBar.appendChild(block3);
  progressStatusBar.appendChild(block4); // progressStatusBar blocks's children

  block1.appendChild(block1Title);
  block1.appendChild(block1Div);
  block2.appendChild(block2Title);
  block2.appendChild(block2Div);
  block3.appendChild(block3Title);
  block3.appendChild(block3Div);
  block4.appendChild(block4Title);
  block4.appendChild(block4Div); // progressStatusBarCell children

  progressStatusBarCell.appendChild(progressStatusCell); // btnsChangeViewsToCell children

  btnsChangeViewsToCell.appendChild(btnPreviousProgressView);
  btnsChangeViewsToCell.appendChild(btnNextProgressView);
  /*
   * functions to change blackboard's views
  */

  if (currentProgress === 'Preparación') {
    btnPreviousProgressView.classList.add('disabled');
  }

  function showCurrentProgressView() {
    switch (currentProgress) {
      case 'Preparación':
        blackboard.appendChild((0, _preparacion["default"])());
        break;

      case 'En Promoción':
        blackboard.appendChild((0, _promocion["default"])());
        break;

      case 'Tramite y Avalúo':
        blackboard.appendChild((0, _tramite["default"])());
        break;

      case 'Escritura':
        blackboard.appendChild((0, _escritura["default"])());
        break;

      default:
        blackboard.appendChild((0, _preparacion["default"])());
    }
  }

  showCurrentProgressView();

  function traversesProgressArrayBackwards() {
    if (Counter === 0) {
      // eslint-disable-next-line no-plusplus
      Counter++;
    } else if (Counter > 0) {
      blackboard.innerHTML = '';
      blackboard.appendChild(progressViews[Counter - 1]); // eslint-disable-next-line no-plusplus

      Counter--;
    }
  }

  function traversesProgressArrayForward() {
    blackboard.innerHTML = '';

    if (Counter < progressViews.length - 1) {
      blackboard.appendChild(progressViews[Counter + 1]); // eslint-disable-next-line no-plusplus

      Counter++;
    } else {
      blackboard.appendChild(progressViews[0]);
      Counter = 0;
    }
  }

  btnNextProgressView.addEventListener('click', traversesProgressArrayForward);
  btnPreviousProgressView.addEventListener('click', traversesProgressArrayBackwards);
  btnOpenMenu.addEventListener('click', function () {
    return menu.classList.remove('is__active');
  });
  return dash;
}; // function openView(e) {
//   const progress = e.target.dataset.progress;
//   console.log(progress);
//   blackboard.innerHTML = '';
//   switch (progress) {
//     case '1':
//       blackboard.appendChild(preparacionView());
//       break;
//     case '2':
//       blackboard.appendChild(promoView());
//       break;
//     case '3':
//       blackboard.appendChild(tramiteView());
//       break;
//     case '4':
//       blackboard.appendChild(escrituraView());
//       break;
//     default:
//       blackboard.appendChild(preparacionView());
//   }
// }
// block1Div.addEventListener('click', openView);
// block2Div.addEventListener('click', openView);
// block3Div.addEventListener('click', openView);
// block4Div.addEventListener('click', openView);
// btnNextProgressView.addEventListener('click', () => {
//   blackboard.innerHTML = '';
//   if (Counter > 0) {
//     blackboard.appendChild(progressViews[Counter - 1]);
//     // eslint-disable-next-line no-plusplus
//     Counter--;
//   } else {
//     blackboard.appendChild(progressViews[progressViews.length - 1]);
//     Counter = progressViews.length - 1;
//   }
// });
// btnPreviousProgressView.addEventListener('click', () => {
//   blackboard.innerHTML = '';
//   if (Counter < progressViews.length - 1) {
//     blackboard.appendChild(progressViews[Counter + 1]);
//     // eslint-disable-next-line no-plusplus
//     Counter++;
//   } else {
//     blackboard.appendChild(progressViews[0]);
//     Counter = 0;
//   }
// });


exports["default"] = _default;