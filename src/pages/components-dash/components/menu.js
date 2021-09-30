export default () => {
  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu');
  menu.setAttribute('id', 'menu');

  /* main container */
  const container = document.createElement('div');
  container.setAttribute('class', 'menu__container');
  /* button close/open menu */ // in vertical
  const btnCloseMenu = document.createElement('img');
  btnCloseMenu.setAttribute('src', '../assets/menu-icons/left-arrow-white.svg');
  btnCloseMenu.setAttribute('class', 'menu__btnClose');

  /*
    * main divisors
    - logoTzedeka only in vertical menu
    - letterTzedeka
    - nav
  */
  const logoTzedeka = document.createElement('div');
  const letterTzedeka = document.createElement('div');
  const nav = document.createElement('nav');
  logoTzedeka.setAttribute('class', 'menu__logoTz');
  letterTzedeka.setAttribute('class', 'menu__letterTz');
  nav.setAttribute('class', 'menu__nav');
  /*
    main divisors children
  */
  const letterTzImg = document.createElement('img');/* letterTzedeka child */
  const logoTzImg = document.createElement('img'); /* logoTzedeka child only in vertical menu  */
  /**  nav children */
  const miProperty = document.createElement('li');
  const shareLink = document.createElement('li'); // in vertical menu is none
  const referTo = document.createElement('li');
  const comment = document.createElement('li');
  const logOut = document.createElement('li');
  logoTzImg.setAttribute('src', '../assets/logos/LogoTz.png');
  letterTzImg.setAttribute('src', '../assets/logos/Letters no background.png');
  miProperty.setAttribute('class', 'li1__miPropiedad');
  miProperty.setAttribute('id', 'miPropertyBtn');
  referTo.setAttribute('id', 'navReferBtn');
  comment.setAttribute('id', 'navCommentsBtn');
  shareLink.setAttribute('id', 'navShareLinkBtn');
  // logOut id

  /** nav li children */
  const defaultIcon = document.createElement('img');
  const defaultAnchor = document.createElement('a');

  const shareLinkIcon = document.createElement('img');
  const shareLinkAnchor = document.createElement('a');

  const referIcon = document.createElement('img');
  const referAnchor = document.createElement('a');

  const commentIcon = document.createElement('img');
  const commentAnchor = document.createElement('a');

  const logoutIcon = document.createElement('img');
  const logoutAnchor = document.createElement('a');

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
  btnCloseMenu.addEventListener('click', () => {
    menu.classList.remove('openMenu');
  });// class inside styles.scss
  /*
    * Nesting
  */
  // main container
  menu.appendChild(container);
  // button close/open menu
  container.appendChild(btnCloseMenu);
  // main divisors
  container.appendChild(logoTzedeka);
  container.appendChild(nav);
  container.appendChild(letterTzedeka);
  // main divisors children
  letterTzedeka.appendChild(letterTzImg);
  logoTzedeka.appendChild(logoTzImg);
  nav.appendChild(miProperty);
  nav.appendChild(shareLink);
  nav.appendChild(referTo);
  nav.appendChild(comment);
  nav.appendChild(logOut);
  //  nav li children
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
