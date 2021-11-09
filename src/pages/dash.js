import Menu from './components-dash/components/menu.js';
import progressStatusBarCell from './components-dash/componentsInCell/progressStatusBarCell.js';
import btnsChangeViewsToCell from './components-dash/componentsInCell/btnsChangeViewsToCell.js';
import progressStatusBar from './components-dash/components/progressStatusBar.js';
import userInfo from './components-dash/components/userInfo.js';
import modalComments from './components-dash/components/menu-modals/comments-modal.js';
import modalShareLink from './components-dash/components/menu-modals/modalShareLink.js';
import modalRefer from './components-dash/components/menu-modals/modalRefer.js';

// Preparación, En Promoción, Tramite y Avalúo, Escritura
export const user = {
  currentProgressStr: 'Preparación',
  userName: 'Juan',
  propLink: 'https://www.inmuebles24.com/inmuebles.html',
};
const { userName, currentProgressStr, propLink } = user;
export const dashboard = () => {
  const dash = document.createElement('div');
  const container = document.createElement('div');
  dash.setAttribute('class', 'dashboard');
  container.setAttribute('class', 'dash__container');
  container.setAttribute('id', 'dashboard');
  // button open menu
  const btnOpenMenu = document.createElement('img');
  btnOpenMenu.setAttribute('id', 'btnOpenMenu');
  btnOpenMenu.setAttribute('src', '../assets/menu-icons/burger_menu.svg');
  /*
  * main divisors *
  - blackboard
  - IMPORTADO userInfo
  - IMPORTADO progressStatusBar element in tablet and desk
  - IMPORTADO progressStatusBarCell and btnsChangeViewsToCell elements only in cell
  */
  const blackboard = document.createElement('div');
  blackboard.setAttribute('class', 'blackboard');
  blackboard.setAttribute('id', 'Blackboard');
  /*
  * nesting *
  */
  dash.appendChild(container);
  // button open menu and menu
  container.appendChild(btnOpenMenu);
  container.appendChild(Menu());
  container.appendChild(modalComments());
  container.appendChild(modalShareLink(propLink));
  container.appendChild(modalRefer());

  //  main div
  container.appendChild(userInfo(userName, propLink));
  container.appendChild(progressStatusBarCell(currentProgressStr));
  container.appendChild(progressStatusBar(currentProgressStr));
  container.appendChild(blackboard);
  container.appendChild(btnsChangeViewsToCell());
  return dash;
};
