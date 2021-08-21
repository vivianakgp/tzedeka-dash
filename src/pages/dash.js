import Menu from './menu.js';

// Preparación, En Promoción, Tramite y Avalúo, Escritura
export const user = {
  currentProgressDashViewStr: 'Escritura',
  name: 'David',
  linkPropertyPublication: 'http://localhost:5000/#/dashboard//localhost:5000/#/dashboard',
};
export const dashboard = () => {
  /*
  * creating elements html *
  */
  const dash = document.createElement('div');
  const container = document.createElement('div');
  dash.setAttribute('class', 'dashboard');
  container.setAttribute('class', 'dash__container');
  // button open menu
  const btnOpenMenu = document.createElement('img');
  btnOpenMenu.setAttribute('id', 'btnOpenMenu');
  btnOpenMenu.setAttribute('src', '../assets/menu-icons/burger_menu.svg');
  /*
  * main divisors *
  - userInfo
  - progressStatusBar
  - blackboard
  - progressStatusBarCell and btnsChangeViewsToCell elements only in cell
  */
  const userInfo = document.createElement('div');
  const progressStatusBar = document.createElement('div');
  const blackboard = document.createElement('div');
  const progressStatusBarCell = document.createElement('div');
  const btnsChangeViewsToCell = document.createElement('div');
  //  adding classes to the main divisors
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
  const welcome = document.createElement('h1');
  const propertyLink = document.createElement('div');
  propertyLink.setAttribute('class', 'userInfo__propertyLink');
  // welcome child
  const span = document.createElement('span');
  welcome.innerText = 'Bienvenido';
  // span.innerText = user.name; solo en desktop
  // propertyLink children
  const link = document.createElement('p');
  const networkIcons = document.createElement('div');
  // link.innerHTML = `Link de mi Propiedad: ${linkPropertyPublication}`;
  // propertyLink / networkIcons children
  // link.innerHTML = `Link de mi Propiedad: ${linkPropertyPublication}`;
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
  const block2Title = document.createElement('span');
  const block3Title = document.createElement('span');
  const block4Title = document.createElement('span');
  const block1Btn = document.createElement('div');
  const block2Btn = document.createElement('div');
  const block3Btn = document.createElement('div');
  const block4Btn = document.createElement('div');
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
  const progressStatusCell = document.createElement('div');
  progressStatusCell.setAttribute('class', 'progressStatusBarCell__status');
  progressStatusCell.innerText = user.currentProgressDashViewStr;

  /*
  * btnsChangeViewsToCell children *
  - only in cell
  */
  const btnPreviousProgressView = document.createElement('button');
  const btnNextProgressView = document.createElement('button');
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
  // button open menu and menu
  container.appendChild(btnOpenMenu);
  container.appendChild(Menu());
  //  main div
  container.appendChild(userInfo);
  container.appendChild(progressStatusBarCell);
  container.appendChild(progressStatusBar);
  container.appendChild(blackboard);
  container.appendChild(btnsChangeViewsToCell);
  // userInfo children
  userInfo.appendChild(welcome);
  userInfo.appendChild(propertyLink);
  //  userInfo welcome and propertyLink children
  welcome.appendChild(span);
  propertyLink.appendChild(link);
  propertyLink.appendChild(networkIcons);
  // propertyLink / networkIcons children
  networkIcons.appendChild(iconWhats);
  networkIcons.appendChild(iconFace);
  networkIcons.appendChild(iconShare);
  // progressStatusBar children
  progressStatusBar.appendChild(block1);
  progressStatusBar.appendChild(block2);
  progressStatusBar.appendChild(block3);
  progressStatusBar.appendChild(block4);
  // progressStatusBar / blocks's children
  block1.appendChild(block1Title);
  block1.appendChild(block1Btn);
  block2.appendChild(block2Title);
  block2.appendChild(block2Btn);
  block3.appendChild(block3Title);
  block3.appendChild(block3Btn);
  block4.appendChild(block4Title);
  block4.appendChild(block4Btn);
  // progressStatusBarCell children
  progressStatusBarCell.appendChild(progressStatusCell);
  // btnsChangeViewsToCell children
  btnsChangeViewsToCell.appendChild(btnPreviousProgressView);
  btnsChangeViewsToCell.appendChild(btnNextProgressView);
  return dash;
};
