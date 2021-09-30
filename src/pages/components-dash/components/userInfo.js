export default (name, propLink) => {
  const userInfo = document.createElement('div');
  userInfo.setAttribute('class', 'blackboard__userInfo');
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
  welcome.innerText = `Bienvenido ${name}`; //  in desktop user.name;
  // propertyLink children
  const link = document.createElement('a');
  const networkIcons = document.createElement('div');
  // link.innerHTML = 'https://www.inmuebles24.com/inmuebles.html';
  link.innerHTML = `Link de mi Propiedad:  ${propLink}`;
  // link.setAttribute('href', 'https://www.inmuebles24.com/inmuebles.html');

  // propertyLink / networkIcons children
  const iconWhats = document.createElement('img');
  const iconFace = document.createElement('img');
  const iconShare = document.createElement('img');
  iconWhats.setAttribute('src', '../assets/social-icons/icon_whatsApp.svg');
  iconFace.setAttribute('src', '../assets/social-icons/icon_facebook.svg');
  iconShare.setAttribute('src', '../assets/social-icons/icon_copy.svg');
  // nesting
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
  return userInfo;
};
