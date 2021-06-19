export default () => {
  const Title = 'Preparación';
  /*
  * message description *
  */
  const txtBold1 = 'Fotografía y video:  ';
  const txtLight1 = 'Tomamos la multimedia necesaría para la promoción, edición y postproducción.';
  const txtBold2 = 'Ficha de propiedad:  ';
  const txtLight2 = 'Con la información y fotografías recabadas diseñamos una ficha con lo más importante.';
  const txtBold3 = 'Carga de propiedad: ';
  const txtLight3 = 'Subimos la ficha de propiedad a nuestra web tzedeka.com y sitios de busqueda inmobiliaria.';
  const txtBold4 = 'Diseño de publicidad y material gráfico ';
  /*
  * creating elements html*
  */
  const preparationView = document.createElement('section');
  preparationView.setAttribute('class', 'prepaContainer');
  // main elements
  const imageDiv = document.createElement('div');
  const descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'prepaDescription');
  imageDiv.setAttribute('class', 'prepaImage');
  // main elements children
  const img = document.createElement('img');
  const title = document.createElement('h2');
  const description = document.createElement('ul');
  img.setAttribute('src', '../assets/images/CasaEnVenta.png');
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
  /*
  * nesting *
  */
  // main elements
  preparationView.appendChild(imageDiv);
  preparationView.appendChild(descriptionDiv);
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

  return preparationView;
};
