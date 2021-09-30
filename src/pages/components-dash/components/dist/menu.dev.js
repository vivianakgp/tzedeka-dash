"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var menu = document.createElement('div');
  menu.setAttribute('class', 'menu');
  menu.setAttribute('id', 'menu');
  /* main container */

  var container = document.createElement('div');
  container.setAttribute('class', 'menu__container');
  /* button close/open menu */
  // in vertical

  var btnCloseMenu = document.createElement('img');
  btnCloseMenu.setAttribute('src', '../assets/menu-icons/left-arrow-white.svg');
  btnCloseMenu.setAttribute('class', 'menu__btnClose');
  /*
    * main divisors
    - logoTzedeka only in vertical menu
    - letterTzedeka
    - nav
  */

  var logoTzedeka = document.createElement('div');
  var letterTzedeka = document.createElement('div');
  var nav = document.createElement('nav');
  logoTzedeka.setAttribute('class', 'menu__logoTz');
  letterTzedeka.setAttribute('class', 'menu__letterTz');
  nav.setAttribute('class', 'menu__nav');
  /*
    main divisors children
  */

  var letterTzImg = document.createElement('img');
  /* letterTzedeka child */

  var logoTzImg = document.createElement('img');
  /* logoTzedeka child only in vertical menu  */

  /**  nav children */

  var miProperty = document.createElement('li');
  var shareLink = document.createElement('li'); // in vertical menu is none

  var referTo = document.createElement('li');
  var comment = document.createElement('li');
  var logOut = document.createElement('li');
  logoTzImg.setAttribute('src', '../assets/logos/LogoTz.png');
  letterTzImg.setAttribute('src', '../assets/logos/Letters no background.png');
  miProperty.setAttribute('class', 'li1__miPropiedad');
  miProperty.setAttribute('id', 'miPropertyBtn');
  referTo.setAttribute('id', 'navReferBtn');
  comment.setAttribute('id', 'navCommentsBtn');
  shareLink.setAttribute('id', 'navShareLinkBtn'); // logOut id

  /** nav li children */

  var defaultIcon = document.createElement('img');
  var defaultAnchor = document.createElement('a');
  var shareLinkIcon = document.createElement('img');
  var shareLinkAnchor = document.createElement('a');
  var referIcon = document.createElement('img');
  var referAnchor = document.createElement('a');
  var commentIcon = document.createElement('img');
  var commentAnchor = document.createElement('a');
  var logoutIcon = document.createElement('img');
  var logoutAnchor = document.createElement('a');
  defaultAnchor.innerHTML = 'Mi Propiedad';
  shareLinkAnchor.innerHTML = 'Link de mi propiedad';
  referAnchor.innerHTML = 'Referir a alguien';
  commentAnchor.innerHTML = '¿Qué podemos mejorar?';
  logoutAnchor.innerHTML = 'Cerrar sesión';
  defaultIcon.setAttribute('src', '../assets/menu-icons/property.svg');
  shareLinkIcon.setAttribute('src', '../assets/menu-icons/house.svg');
  referIcon.setAttribute('src', '../assets/menu-icons/refer.svg');
  commentIcon.setAttribute('src', '../assets/menu-icons/comments.svg');
  logoutIcon.setAttribute('src', '../assets/menu-icons/logout.svg');
  /* Events */

  btnCloseMenu.addEventListener('click', function () {
    menu.classList.remove('openMenu');
  }); // class inside styles.scss

  /*
    * Nesting
  */
  // main container

  menu.appendChild(container); // button close/open menu

  container.appendChild(btnCloseMenu); // main divisors

  container.appendChild(logoTzedeka);
  container.appendChild(nav);
  container.appendChild(letterTzedeka); // main divisors children

  letterTzedeka.appendChild(letterTzImg);
  logoTzedeka.appendChild(logoTzImg);
  nav.appendChild(miProperty);
  nav.appendChild(shareLink);
  nav.appendChild(referTo);
  nav.appendChild(comment);
  nav.appendChild(logOut); //  nav li children

  miProperty.appendChild(defaultIcon);
  miProperty.appendChild(defaultAnchor);
  shareLink.appendChild(shareLinkIcon);
  shareLink.appendChild(shareLinkAnchor);
  referTo.appendChild(referIcon);
  referTo.appendChild(referAnchor);
  comment.appendChild(commentIcon);
  comment.appendChild(commentAnchor);
  logOut.appendChild(logoutIcon);
  logOut.appendChild(logoutAnchor);
  return menu;
};

exports["default"] = _default;