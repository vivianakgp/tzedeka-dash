export default () => {
  const Title = 'Promoción';
  /*
  * message description *
  */
  const txtBold1 = 'Nuestra página web: ';
  const txtLight1 = 'Nuestra carta estrella para tu propiedad, el mejor diseño y estrategias van dirigidas hacía aqui.';
  const txtBold2 = 'Portales inmobiliarios: ';
  const txtLight2 = 'Sitios como Inmuebles24 y vivanuncios reciben a miles de personas que buscan una nueva propiedad y la tuya estara entre las opciones que veran.';
  const txtBold3 = 'Redes sociales: ';
  const txtLight3 = 'Compartimos tu propiedad en diferentes redes sociales, creamos campañas y anuncios dirigidos.';
  const txtBold4 = 'Red de contacto e inmobiliarios: ';
  const txtLight4 = 'Presentamos a inmobiliaria y agentes tu propiedad como una opción para sus clientes.';
  /*
  * creating elements html * *
  */
  const promoView = document.createElement('section');
  promoView.setAttribute('class', 'promoContainer');
  // main elements
  const imageDiv = document.createElement('div');
  const descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'promoDescription');
  imageDiv.setAttribute('class', 'promoImage');
  // main elements children
  const img = document.createElement('img');
  const title = document.createElement('h2');
  const description = document.createElement('ul');
  img.setAttribute('src', '../assets/images/Promoción.png');
  title.innerText = Title;
  // description elements
  const breakpoint1 = document.createElement('li');
  const breakpoint2 = document.createElement('li');
  const breakpoint3 = document.createElement('li');
  const breakpoint4 = document.createElement('li');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const span4 = document.createElement('span');
  breakpoint1.innerHTML = `${txtBold1}`;
  breakpoint2.innerHTML = `${txtBold2}`;
  breakpoint3.innerHTML = `${txtBold3}`;
  breakpoint4.innerHTML = `${txtBold4}`;
  span1.innerText = `${txtLight1}`;
  span2.innerText = `${txtLight2}`;
  span3.innerText = `${txtLight3}`;
  span4.innerText = `${txtLight4}`;
  /*
  * nesting *
  */
  // main elements
  promoView.appendChild(imageDiv);
  promoView.appendChild(descriptionDiv);
  // main elements children
  imageDiv.appendChild(img);
  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(description);
  //  description children
  description.appendChild(breakpoint1);
  description.appendChild(breakpoint2);
  description.appendChild(breakpoint3);
  description.appendChild(breakpoint4);
  // description breakpoint children
  breakpoint1.appendChild(span1);
  breakpoint2.appendChild(span2);
  breakpoint3.appendChild(span3);
  breakpoint4.appendChild(span4);

  return promoView;
};
