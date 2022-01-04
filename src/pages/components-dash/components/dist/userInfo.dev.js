"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(name, propLink) {
  var userInfo = document.createElement('div');
  userInfo.setAttribute('class', 'blackboard__userInfo');
  /*
  * userInfo children *
  - welcome
  - propertyLink only in desktop
  */

  var welcome = document.createElement('h1');
  var propertyLink = document.createElement('div');
  propertyLink.setAttribute('class', 'userInfo__propertyLink'); // welcome child

  var span = document.createElement('span');
  welcome.innerText = 'Bienvenido'; // `Bienvenido ${name}` in desktop user.name;
  // propertyLink children

  var link = document.createElement('a');
  var networkIcons = document.createElement('div'); // link.innerHTML = 'https://www.inmuebles24.com/inmuebles.html';

  link.innerHTML = "Link de mi Propiedad:  ".concat(propLink); // link.setAttribute('href', 'https://www.inmuebles24.com/inmuebles.html');
  // propertyLink / networkIcons children

  var iconWhats = document.createElement('i');
  var iconFace = document.createElement('i');
  var iconShare = document.createElement('i');
  iconWhats.setAttribute('class', 'fab fa-facebook-messenger');
  iconFace.setAttribute('class', 'fab fa-facebook');
  iconShare.setAttribute('class', 'fas fa-share-square'); // nesting
  // userInfo children

  userInfo.appendChild(welcome);
  userInfo.appendChild(propertyLink); //  userInfo welcome and propertyLink children

  welcome.appendChild(span);
  propertyLink.appendChild(link);
  propertyLink.appendChild(networkIcons); // propertyLink / networkIcons children

  networkIcons.appendChild(iconWhats);
  networkIcons.appendChild(iconFace);
  networkIcons.appendChild(iconShare);
  return userInfo;
};

exports["default"] = _default;