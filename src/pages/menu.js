
export default () => {
  // *** menu *** 
  let menu = document.createElement('header');
  menu.setAttribute('class', 'header');
  menu.setAttribute('name','header1');
 // childs
  let container = document.createElement('div');
      container.setAttribute('class', 'menu');
      //child-1
      let containerLogoTz = document.createElement('div');
          containerLogoTz.setAttribute('class', 'menu__containerLogoTz');
          let logoTz = document.createElement('img');
          logoTz.setAttribute('src', '../assets/LogoTz.png');
          logoTz.setAttribute('class','menu__logoTz');
      //child-2
      let containerLogo = document.createElement('div');
          containerLogo.setAttribute('class','menu__containerLogo');
          let logo = document.createElement('img');
              logo.setAttribute('class', 'menu__logo');
              logo.setAttribute('src','../assets/Logo.png');
      //child-3
      let nav = document.createElement('nav');
          nav.setAttribute('class','menu__nav');
          // nav groups
          let group1 = document.createElement('div');
              group1.setAttribute('class', 'nav__group1');
                let a = document.createElement('a');
                    a.innerHTML = 'Mi Propiedad';
                let icon = document.createElement('img');
                    icon.setAttribute('src', '../assets/icons/property.svg');
                    icon.setAttribute('class','menu__icon');
          let group2 = document.createElement('div');         
              group2.setAttribute('class','nav__group2'); 
                let a2 = document.createElement('a');
                    a2.innerHTML = 'Referir a alguien';
                let referIcon  = document.createElement('img');
                    referIcon.setAttribute('src','../assets/icons/refer.svg');
                    referIcon.setAttribute('class','menu__icon');
          let group3 = document.createElement('div');         
              group3.setAttribute('class','nav__group3');
                let a3 = document.createElement('a');
                    a3.innerHTML = '¿Qué podemos mejorar?';
                let comentIcon = document.createElement('img');
                    comentIcon.setAttribute('src','../assets/icons/coments.svg');
                    comentIcon.setAttribute('class','menu__icon');
          let group4 = document.createElement('div');         
              group4.setAttribute('class','nav__group4'); 
                let a4 = document.createElement('a');
                    a4.innerHTML = 'Cerrar sesión';
                let logoutIcon = document.createElement('img');
                    logoutIcon.setAttribute('src','../assets/icons/logout.svg');
                    logoutIcon.setAttribute('class','menu__icon');


  // Nesting
  menu.appendChild(container);
    // child-1, child-2, child-3
  container.appendChild(containerLogoTz);
  container.appendChild(nav);
  container.appendChild(containerLogo);
        // logos
      containerLogo.appendChild(logo);
      containerLogoTz.appendChild(logoTz);
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
      group3.appendChild(comentIcon);
      group3.appendChild(a3);
       // group3 childs
      group4.appendChild(logoutIcon);
      group4.appendChild(a4);


// *** *** 
return menu
};