export default () => {
  const Title = 'Tramite y Avalúo';
  /*
  * message description *
  */
  const txtBold1 = 'Avalúo: ';
  const txtLight1 = 'Se envía con cita a un valuador a tu propiedad quien calculará y revisará que el precio coincida con el valor.';
  const txtBold2 = 'Proceso del crédito: ';
  const txtLight2 = 'Dependiendo el tipo de crédito y fuente de financiamiento el proceso puede durar 3 a 5 semanas.';
  const txtBold3 = 'Expediente de comprador: ';
  const txtLight3 = 'Para el crédito y escritura se recaban documentos financieros y de identificación.';
  const txtBold4 = 'Expediente de vendedor: ';
  const txtLight4 = 'Te pediremos documentos de identificación, financieros y certificados de la propiedad.';
  /*
  * creating elements html * *
  */
  const tramiteView = document.createElement('section');
  tramiteView.setAttribute('class', 'boardView__container');
  // main elements
  const imageDiv = document.createElement('div');
  const descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'boardView__description');
  imageDiv.setAttribute('class', 'boardView__description');
  // main elements children
  const img = document.createElement('img');
  const title = document.createElement('h2');
  const description = document.createElement('ul');
  img.setAttribute('src', '../assets/images/Demostración.png');
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
  tramiteView.appendChild(imageDiv);
  tramiteView.appendChild(descriptionDiv);
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

  return tramiteView;
};
