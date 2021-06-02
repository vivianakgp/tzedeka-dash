/* eslint-disable prefer-const */
/*
* Import all the views
*/
import Menu from './menu.js';
import preparacionView from './components-dash/views-dash/preparacion.js';
import promoView from './components-dash/views-dash/promocion.js';
import tramiteView from './components-dash/views-dash/tramite.js';
import escrituraView from './components-dash/views-dash/escritura.js';

const currentProgress = 'En Promoción';
const userName = ' martin ricardo';
const linkPropertyPublication = 'http://localhost:5000/#/dashboard//localhost:5000/#/dashboard';
const menu = Menu();// ojo con este no se si sea correcto ponerlo fuera de mi funcion
/*
 * create an array of progress views
 */
const preparacion = preparacionView();
const promocion = promoView();
const tramite = tramiteView();
const escritura = escrituraView();
const progressViews = [preparacion, promocion, tramite, escritura];
let Counter = 0;
export default () => {
  /*
  * creating elements html *
  */
  const dash = document.createElement('div');
  const container = document.createElement('div');
  dash.setAttribute('class', 'dashboard');
  container.setAttribute('class', 'dash__container');
  // button open menu
  const btnOpenMenu = document.createElement('img');
  btnOpenMenu.setAttribute('class', 'btnOpenMenu');
  btnOpenMenu.setAttribute('src', '../assets/menu-icons/burger_menu.svg');
  /*
  * main divisors *
  - progressStatusBarCell and btnsChangeViewsToCell elements only in cell
  */
  const userInfo = document.createElement('div');
  const progressStatusBar = document.createElement('div');
  const blackboard = document.createElement('div');
  const progressStatusBarCell = document.createElement('div');
  const btnsChangeViewsToCell = document.createElement('div');
  // add classes
  userInfo.setAttribute('class', 'userInfo');
  progressStatusBar.setAttribute('class', 'progressStatusBar');
  blackboard.setAttribute('class', 'blackboard');
  progressStatusBarCell.setAttribute('class', 'progressStatusBarCell');
  btnsChangeViewsToCell.setAttribute('class', 'btnsChangeViewsToCell');
  /*
  * userInfo children *
  - propertyLink share link only in desktop
  */
  const welcome = document.createElement('h1');
  const propertyLink = document.createElement('div');
  propertyLink.setAttribute('class', 'userInfo__propertyLink');
  // welcome name child
  const span = document.createElement('span');
  welcome.innerText = 'Bienvenido';
  span.innerText = `${userName}`;
  // propertyLink share link children
  const link = document.createElement('p');
  link.innerHTML = `Link de mi Propiedad: ${linkPropertyPublication}`;
  const networkIcons = document.createElement('div');
  // networkIcons children
  link.innerHTML = `Link de mi Propiedad: ${linkPropertyPublication}`;
  const iconWhats = document.createElement('img');
  const iconFace = document.createElement('img');
  const iconShare = document.createElement('img');
  iconWhats.setAttribute('src', '../assets/social-icons/icon_whatsApp.svg');
  iconFace.setAttribute('src', '../assets/social-icons/icon_facebook.svg');
  iconShare.setAttribute('src', '../assets/social-icons/icon_copy.svg');
  /*
  * progressStatusBar children *
  - blocks to tablet and desktop
  */
  const block1 = document.createElement('div');
  const block2 = document.createElement('div');
  const block3 = document.createElement('div');
  const block4 = document.createElement('div');
  //  blocks's children
  const block1Title = document.createElement('span');
  const block1Div = document.createElement('div');
  const block2Title = document.createElement('span');
  const block2Div = document.createElement('div');
  const block3Title = document.createElement('span');
  const block3Div = document.createElement('div');
  const block4Title = document.createElement('span');
  const block4Div = document.createElement('div');
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
  const progressStatusCell = document.createElement('div');
  progressStatusCell.setAttribute('class', 'progressStatusBarCell__status');
  progressStatusCell.innerText = `${currentProgress}`;

  /*
  * btnsChangeViewsToCell children *
  - only in cell
  */
  const btnPreviousProgressView = document.createElement('button');
  const btnNextProgressView = document.createElement('button');
  // btnNextProgressView.setAttribute('class', 'btnNextProgressView');
  // btnPreviousProgressView.setAttribute('class', 'btnPreviousProgressView');
  /*
  * nesting *
  */
  dash.appendChild(container);
  dash.appendChild(menu);
  // button open menu
  container.appendChild(btnOpenMenu);
  //  main div
  container.appendChild(userInfo);
  container.appendChild(progressStatusBarCell);
  container.appendChild(progressStatusBar);
  container.appendChild(blackboard);
  container.appendChild(btnsChangeViewsToCell);
  // userInfo children
  userInfo.appendChild(welcome);
  userInfo.appendChild(propertyLink);
  //  userInfo welcome name / share link children
  welcome.appendChild(span);
  propertyLink.appendChild(link);
  propertyLink.appendChild(networkIcons);
  // networkIcons children
  networkIcons.appendChild(iconWhats);
  networkIcons.appendChild(iconFace);
  networkIcons.appendChild(iconShare);
  // progressStatusBar children
  progressStatusBar.appendChild(block1);
  progressStatusBar.appendChild(block2);
  progressStatusBar.appendChild(block3);
  progressStatusBar.appendChild(block4);
  // progressStatusBar blocks's children
  block1.appendChild(block1Title);
  block1.appendChild(block1Div);
  block2.appendChild(block2Title);
  block2.appendChild(block2Div);
  block3.appendChild(block3Title);
  block3.appendChild(block3Div);
  block4.appendChild(block4Title);
  block4.appendChild(block4Div);
  // progressStatusBarCell children
  progressStatusBarCell.appendChild(progressStatusCell);
  // btnsChangeViewsToCell children
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
        blackboard.appendChild(preparacionView());
        break;
      case 'En Promoción':
        blackboard.appendChild(promoView());
        break;
      case 'Tramite y Avalúo':
        blackboard.appendChild(tramiteView());
        break;
      case 'Escritura':
        blackboard.appendChild(escrituraView());
        break;
      default:
        blackboard.appendChild(preparacionView());
    }
  }
  showCurrentProgressView();

  function traversesProgressArrayBackwards() {
    if (Counter === 0) {
      // eslint-disable-next-line no-plusplus
      Counter++;
    } else if (Counter > 0) {
      blackboard.innerHTML = '';
      blackboard.appendChild(progressViews[Counter - 1]);
      // eslint-disable-next-line no-plusplus
      Counter--;
    }
  }
  function traversesProgressArrayForward() {
    blackboard.innerHTML = '';
    if (Counter < progressViews.length - 1) {
      blackboard.appendChild(progressViews[Counter + 1]);
      // eslint-disable-next-line no-plusplus
      Counter++;
    } else {
      blackboard.appendChild(progressViews[0]);
      Counter = 0;
    }
  }

  btnNextProgressView.addEventListener('click', traversesProgressArrayForward);
  btnPreviousProgressView.addEventListener('click', traversesProgressArrayBackwards);
  btnOpenMenu.addEventListener('click', () => {
    menu.classList.add('is__active');
  }); // class inside styles.scss

  return dash;
};
// function openView(e) {
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
