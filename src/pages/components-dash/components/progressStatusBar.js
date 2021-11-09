export default (currentProgress) => {
  const progressStatusBar = document.createElement('div');
  progressStatusBar.setAttribute('class', 'blackboard__progressStatusBar');
  /*
  * progressStatusBar children *
  - blocks to tablet and desktop
  */
  const block1 = document.createElement('div');
  const block2 = document.createElement('div');
  const block3 = document.createElement('div');
  const block4 = document.createElement('div');
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
  // buttons classes used in controller to add event click
  block1Btn.setAttribute('class', 'btnProgressStatusBar defaultBackground ');
  block2Btn.setAttribute('class', 'btnProgressStatusBar defaultBackground ');
  block3Btn.setAttribute('class', 'btnProgressStatusBar defaultBackground ');
  block4Btn.setAttribute('class', 'btnProgressStatusBar defaultBackground ');
  // buttons data-progress used in controller to open respective view
  block1Btn.setAttribute('data-progress', '1');
  block2Btn.setAttribute('data-progress', '2');
  block3Btn.setAttribute('data-progress', '3');
  block4Btn.setAttribute('data-progress', '4');
  // eslint-disable-next-line default-case
  switch (currentProgress) {
    case 'Preparación':
      block1Title.classList.add('color-brown');
      block1Btn.classList.remove('defaultBackground');
      block1Btn.classList.add('background-pink');
      break;
    case 'En Promoción':
      block2Title.classList.add('color-brown');
      block2Btn.classList.remove('defaultBackground');
      block2Btn.classList.add('background-pink');
      break;
    case 'Tramite y Avalúo':
      block3Title.classList.add('color-brown');
      block3Btn.classList.remove('defaultBackground');
      block3Btn.classList.add('background-pink');
      break;
    case 'Escritura':
      block4Title.classList.add('color-brown');
      block4Btn.classList.remove('defaultBackground');
      block4Btn.classList.add('background-pink');
      break;
  }

  // nesting
  progressStatusBar.appendChild(block1);
  progressStatusBar.appendChild(block2);
  progressStatusBar.appendChild(block3);
  progressStatusBar.appendChild(block4);
  block1.appendChild(block1Title);
  block1.appendChild(block1Btn);
  block2.appendChild(block2Title);
  block2.appendChild(block2Btn);
  block3.appendChild(block3Title);
  block3.appendChild(block3Btn);
  block4.appendChild(block4Title);
  block4.appendChild(block4Btn);

  return progressStatusBar;
};
