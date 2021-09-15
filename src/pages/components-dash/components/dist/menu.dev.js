"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var menu = document.createElement('div');
  menu.setAttribute('class', 'menu');
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
  /* main divisors children */

  var letterTzImg = document.createElement('img');
  var logoTzImg = document.createElement('img');
  var navLi1 = document.createElement('li');
  var navLi2 = document.createElement('li');
  var navLi3 = document.createElement('li');
  var navLi4 = document.createElement('li');
  var navLi5 = document.createElement('li'); // in vertical menu is none

  logoTzImg.setAttribute('src', '../assets/logos/LogoTz.png');
  letterTzImg.setAttribute('src', '../assets/logos/Letters no background.png'); // navLi1.setAttribute('class', 'nav__li1');
  // navLi2.setAttribute('class', 'nav__li');

  navLi3.setAttribute('id', 'navCommentsBtn'); // navLi4.setAttribute('class', 'nav__li');

  /*  nav li children */

  var defaultIcon = document.createElement('img');
  var referIcon = document.createElement('img');
  var commentIcon = document.createElement('img');
  var logoutIcon = document.createElement('img');
  var shareIcon = document.createElement('img');
  var defaultAnchor = document.createElement('a');
  var referAnchor = document.createElement('a');
  var commentAnchor = document.createElement('a');
  var logoutAnchor = document.createElement('a');
  defaultAnchor.innerHTML = 'Mi Propiedad';
  defaultIcon.setAttribute('src', '../assets/menu-icons/property.svg'); // defaultIcon.setAttribute('class', 'nav_icon');

  referAnchor.innerHTML = 'Referir a alguien';
  referIcon.setAttribute('src', '../assets/menu-icons/refer.svg'); // referIcon.setAttribute('class', 'nav_icon');

  commentAnchor.innerHTML = '¿Qué podemos mejorar?';
  commentIcon.setAttribute('src', '../assets/menu-icons/comments.svg'); // commentIcon.setAttribute('class', 'nav_icon');

  logoutAnchor.innerHTML = 'Cerrar sesión';
  logoutIcon.setAttribute('src', '../assets/menu-icons/logout.svg'); // logoutIcon.setAttribute('class', 'nav_icon');

  shareIcon.setAttribute('src', '../assets/menu-icons/house.svg');
  /* Events */

  btnCloseMenu.addEventListener('click', function () {
    menu.classList.remove('is__active');
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
  nav.appendChild(navLi1);
  nav.appendChild(navLi5);
  nav.appendChild(navLi2);
  nav.appendChild(navLi3);
  nav.appendChild(navLi4); //  nav li children

  navLi1.appendChild(defaultIcon);
  navLi5.appendChild(shareIcon);
  navLi2.appendChild(referIcon);
  navLi3.appendChild(commentIcon);
  navLi4.appendChild(logoutIcon);
  navLi1.appendChild(defaultAnchor);
  navLi2.appendChild(referAnchor);
  navLi3.appendChild(commentAnchor);
  navLi4.appendChild(logoutAnchor);
  return menu;
};

exports["default"] = _default;