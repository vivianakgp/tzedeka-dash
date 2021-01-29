
export default ()=>{
  // *** menu *** 
  let header = document.createElement('header');
  header.setAttribute('class', 'header');
 // childs
  let container = document.createElement('div');
      container.setAttribute('class', 'header__container');
      let logo = document.createElement('img');
      let nav = document.createElement('nav');
          let a = document.createElement('a');
              let icon = document.createTextNode('i');
  // Nesting
  a.appendChild(icon);
  nav.appendChild(a);
  container.append(logo, nav);
  header.appendChild(container);

// *** *** 
return header
};