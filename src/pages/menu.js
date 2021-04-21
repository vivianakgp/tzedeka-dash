export default () => {
  // *** menu ***
  var menu = document.createElement('header');
  menu.setAttribute('class', 'header');
  menu.setAttribute('name', 'header1');
  // childs
  const container = document.createElement('div');
  container.setAttribute('class', 'menu');
  // child-1
  const containerLogoTz = document.createElement('div');
  containerLogoTz.setAttribute('class', 'menu__containerLogoTz');
  const btnCloseMenu = document.createElement('button');
  btnCloseMenu.setAttribute('class', 'menu__btn');
  const i = document.createElement('span');
  i.setAttribute('src', '');
  i.setAttribute('class', 'menu__btn-icon');
  const logoTz = document.createElement('img');
  logoTz.setAttribute('src', '../assets/logos/LogoTz.png');
  logoTz.setAttribute('class', 'menu__logoTz');
  // child-2
  const containerLogo = document.createElement('div');
  containerLogo.setAttribute('class', 'menu__containerLogo');
  const logo = document.createElement('img');
  logo.setAttribute('class', 'menu__logo');
  logo.setAttribute('src', '../assets/logos/Logo.png');
  // child-3
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'menu__nav');
  // nav groups
  const group1 = document.createElement('div');
  group1.setAttribute('class', 'nav__group1');
  const a = document.createElement('a');
  a.innerHTML = 'Mi Propiedad';
  const icon = document.createElement('img');
  icon.setAttribute('src', '../assets/menu-icons/property.svg');
  icon.setAttribute('class', 'menu__icon');
  const group2 = document.createElement('div');
  group2.setAttribute('class', 'nav__group2');
  const a2 = document.createElement('a');
  a2.innerHTML = 'Referir a alguien';
  const referIcon = document.createElement('img');
  referIcon.setAttribute('src', '../assets/menu-icons/refer.svg');
  referIcon.setAttribute('class', 'menu__icon');
  const group3 = document.createElement('div');
  group3.setAttribute('class', 'nav__group3');
  const a3 = document.createElement('a');
  a3.innerHTML = '¿Qué podemos mejorar?';
  const comment = document.createElement('img');
  comment.setAttribute('src', '../assets/menu-icons/comments.svg');
  comment.setAttribute('class', 'menu__icon');
  const group4 = document.createElement('div');
  group4.setAttribute('class', 'nav__group4');
  const a4 = document.createElement('a');
  a4.innerHTML = 'Cerrar sesión';
  const logoutIcon = document.createElement('img');
  logoutIcon.setAttribute('src', '../assets/menu-icons/logout.svg');
  logoutIcon.setAttribute('class', 'menu__icon');

  btnCloseMenu.addEventListener('click', () => {
    menu.classList.add('is__active');
  });
  // Nesting
  menu.appendChild(container);
  // child-1, child-2, child-3
  container.appendChild(containerLogoTz);
  container.appendChild(nav);
  container.appendChild(containerLogo);
  // logos
  containerLogo.appendChild(logo);
  containerLogoTz.appendChild(logoTz);
  containerLogoTz.appendChild(btnCloseMenu);
  btnCloseMenu.appendChild(i);
  // nav  group1, group2, group3, group4
  nav.appendChild(group1);
  nav.appendChild(group2);
  nav.appendChild(group3);
  nav.appendChild(group4);
  //  group1 childs
  group1.appendChild(icon);
  group1.appendChild(a);
  // group2 childs
  group2.appendChild(referIcon);
  group2.appendChild(a2);
  // group3 childs
  group3.appendChild(comment);
  group3.appendChild(a3);
  // group3 childs
  group4.appendChild(logoutIcon);
  group4.appendChild(a4);
  // *** ***
  return menu;
};
