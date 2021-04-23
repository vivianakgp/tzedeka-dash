/* eslint-disable prefer-const */
import Menu from './menu.js';
import preparationView from './components-dash/views-dash/preparacion.js';
import promoView from './components-dash/views-dash/promocion.js';
import tramiteView from './components-dash/views-dash/tramite.js';
import escrituraView from './components-dash/views-dash/escritura.js';

const name = ' name';
const link = 'http://localhost:5000/#/dashboard';
const menu = Menu();// ojo con este no se si sea correcto ponerlo fuera de mi funcion
export default () => {
  const dash = document.createElement('div');
  const container = document.createElement('div');
  dash.setAttribute('class', 'dashboard');
  container.setAttribute('class', 'dash__container');
  // // //
  const btnOpenMenu = document.createElement('button');
  btnOpenMenu.setAttribute('class', 'btnOpenMenu');
  // main divs
  const divUserInf = document.createElement('div');
  const divProgressBar = document.createElement('div');
  const divBoard = document.createElement('div');
  divUserInf.setAttribute('class', 'container__div divUserInf');
  divProgressBar.setAttribute('class', 'container__div divProgressBar');

  divBoard.setAttribute('class', 'container__div divBoard');
  // divUserInf elements
  const welcomeName = document.createElement('h1');
  const divShareLink = document.createElement('div');
  // children
  welcomeName.innerText = 'Welcome';
  const span = document.createElement('span');
  span.innerText = `  ${name}`;
  divShareLink.innerHTML = `Link de mi Propiedad: ${link}`;
  const iconWhats = document.createElement('img');
  iconWhats.setAttribute('src', '../assets/social-icons/icon_whatsapp.png');
  const iconFace = document.createElement('img');
  iconFace.setAttribute('src', '../assets/social-icons/icon_facebook.png');
  const iconShare = document.createElement('img');
  iconShare.setAttribute('src', '../assets/social-icons/Vector.png');
  // divProgressBar elements
  const block1 = document.createElement('div');
  const block2 = document.createElement('div');
  const block3 = document.createElement('div');
  const block4 = document.createElement('div');
  // children
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
  // events
  btnOpenMenu.addEventListener('click', () => {
    menu.classList.remove('is__active');
  });

  function openView(e) {
    const progress = e.target.dataset.progress;
    console.log(progress);
    divBoard.innerHTML = '';
    switch (progress) {
      case '1':
        divBoard.appendChild(preparationView());
        break;
      case '2':
        divBoard.appendChild(promoView());
        break;
      case '3':
        divBoard.appendChild(tramiteView());
        break;
      case '4':
        divBoard.appendChild(escrituraView());
      default:
    }
  }

  block1Div.addEventListener('click', openView);
  block2Div.addEventListener('click', openView);
  block3Div.addEventListener('click', openView);
  block4Div.addEventListener('click', openView);
  dash.appendChild(menu);
  //  dash first child container
  dash.appendChild(container);
  // btn open menu
  container.appendChild(btnOpenMenu);
  //  main divs
  container.appendChild(divUserInf);
  container.appendChild(divProgressBar);
  container.appendChild(divBoard);
  // divUserInf  elements
  divUserInf.appendChild(welcomeName);
  divUserInf.appendChild(divShareLink);
  // children
  welcomeName.appendChild(span);
  divShareLink.appendChild(iconWhats);
  divShareLink.appendChild(iconFace);
  divShareLink.appendChild(iconShare);
  // divProgressBar elements
  divProgressBar.appendChild(block1);
  divProgressBar.appendChild(block2);
  divProgressBar.appendChild(block3);
  divProgressBar.appendChild(block4);
  // children
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
