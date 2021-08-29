export default () => {
  const userInfo = document.createElement('div');
  userInfo.setAttribute('class', 'blackboard__userInfo');
 /*
  * userInfo children *
  - welcome
  - propertyLink only in desktop
  */
  const welcome = document.createElement('h1');
  const propertyLink = document.createElement('div');
  propertyLink.setAttribute('class', 'propertyLinkContainer');
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

}