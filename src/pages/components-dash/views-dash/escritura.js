export default () => {
  const Title = 'Escritura';
  /*
  * message description *
  */
  const txtBold1 = 'Firma de escrituras: ';
  const txtLight1 = 'En presencia de notario público se firmarán los documentos para el traslado de propiedad.';
  const txtBold2 = 'Pago del banco o institución: ';
  const txtLight2 = 'Dependiendo la forma de pago este puede ser el mismo día de escritura o de 2 a 3 semanas después, al recibirlo se realizará el pago por nuestro servicio.';
  const txtBold3 = 'Entrega física de la propiedad: ';
  const txtLight3 = 'Se entrega la propiedad al comprador en las condiciones pactadas y firmando la entrega.';
  /*
  * creating elements html * *
  */
  const escrituraView = document.createElement('section');
  escrituraView.setAttribute('class', 'escrituraContainer');
  // main elements
  const imageDiv = document.createElement('div');
  const descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'escrituraDescription');
  imageDiv.setAttribute('class', 'escriImage');
  // main elements children
  const img = document.createElement('img');
  const title = document.createElement('h2');
  const description = document.createElement('ul');
  img.setAttribute('src', '../assets/images/FirmaEscritura.png');
  title.innerText = Title;
  // description elements
  const breakpoint1 = document.createElement('li');
  const breakpoint2 = document.createElement('li');
  const breakpoint3 = document.createElement('li');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  breakpoint1.innerHTML = `${txtBold1}`;
  breakpoint2.innerHTML = `${txtBold2}`;
  breakpoint3.innerHTML = `${txtBold3}`;
  span1.innerText = `${txtLight1}`;
  span2.innerText = `${txtLight2}`;
  span3.innerText = `${txtLight3}`;
  /*
  * nesting *
  */
  // main elements
  escrituraView.appendChild(imageDiv);
  escrituraView.appendChild(descriptionDiv);
  // main elements children
  imageDiv.appendChild(img);
  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(description);
  //  description children
  description.appendChild(breakpoint1);
  description.appendChild(breakpoint2);
  description.appendChild(breakpoint3);
  // description breakpoint children
  breakpoint1.appendChild(span1);
  breakpoint2.appendChild(span2);
  breakpoint3.appendChild(span3);

  return escrituraView;
};
