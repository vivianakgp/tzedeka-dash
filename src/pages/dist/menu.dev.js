"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  // *** menu ***
  var menu = document.createElement('header');
  menu.setAttribute('class', 'header');
  menu.setAttribute('name', 'header1'); // childs

  var container = document.createElement('div');
  container.setAttribute('class', 'menu'); // child-1

  var containerLogoTz = document.createElement('div');
  containerLogoTz.setAttribute('class', 'menu__containerLogoTz');
  var btnCloseMenu = document.createElement('button');
  btnCloseMenu.setAttribute('class', 'menu__btn');
  var i = document.createElement('span');
  i.setAttribute('src', '');
  i.setAttribute('class', 'menu__btn-icon');
  var logoTz = document.createElement('img');
  logoTz.setAttribute('src', '../assets/logos/LogoTz.png');
  logoTz.setAttribute('class', 'menu__logoTz'); // child-2

  var containerLogo = document.createElement('div');
  containerLogo.setAttribute('class', 'menu__containerLogo');
  var logo = document.createElement('img');
  logo.setAttribute('class', 'menu__logo');
  logo.setAttribute('src', '../assets/logos/Logo.png'); // child-3

  var nav = document.createElement('nav');
  nav.setAttribute('class', 'menu__nav'); // nav groups

  var group1 = document.createElement('div');
  group1.setAttribute('class', 'nav__group1');
  var a = document.createElement('a');
  a.innerHTML = 'Mi Propiedad';
  var icon = document.createElement('img');
  icon.setAttribute('src', '../assets/menu-icons/property.svg');
  icon.setAttribute('class', 'menu__icon');
  var group2 = document.createElement('div');
  group2.setAttribute('class', 'nav__group2');
  var a2 = document.createElement('a');
  a2.innerHTML = 'Referir a alguien';
  var referIcon = document.createElement('img');
  referIcon.setAttribute('src', '../assets/menu-icons/refer.svg');
  referIcon.setAttribute('class', 'menu__icon');
  var group3 = document.createElement('div');
  group3.setAttribute('class', 'nav__group3');
  var a3 = document.createElement('a');
  a3.innerHTML = '¿Qué podemos mejorar?';
  var comment = document.createElement('img');
  comment.setAttribute('src', '../assets/menu-icons/comments.svg');
  comment.setAttribute('class', 'menu__icon');
  var group4 = document.createElement('div');
  group4.setAttribute('class', 'nav__group4');
  var a4 = document.createElement('a');
  a4.innerHTML = 'Cerrar sesión';
  var logoutIcon = document.createElement('img');
  logoutIcon.setAttribute('src', '../assets/menu-icons/logout.svg');
  logoutIcon.setAttribute('class', 'menu__icon');
  btnCloseMenu.addEventListener('click', function () {
    menu.classList.add('is__active');
  }); // Nesting

  menu.appendChild(container); // child-1, child-2, child-3

  container.appendChild(containerLogoTz);
  container.appendChild(nav);
  container.appendChild(containerLogo); // logos

  containerLogo.appendChild(logo);
  containerLogoTz.appendChild(logoTz);
  containerLogoTz.appendChild(btnCloseMenu);
  btnCloseMenu.appendChild(i); // nav  group1, group2, group3, group4

  nav.appendChild(group1);
  nav.appendChild(group2);
  nav.appendChild(group3);
  nav.appendChild(group4); //  group1 childs

  group1.appendChild(icon);
  group1.appendChild(a); // group2 childs

  group2.appendChild(referIcon);
  group2.appendChild(a2); // group3 childs

  group3.appendChild(comment);
  group3.appendChild(a3); // group3 childs

  group4.appendChild(logoutIcon);
  group4.appendChild(a4); // *** ***

  return menu;
};

exports["default"] = _default;