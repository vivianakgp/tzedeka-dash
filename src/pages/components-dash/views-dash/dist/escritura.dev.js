"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var Title = 'Escritura';
  /*
  * message description *
  */

  var txtBold1 = 'Firma de escrituras: ';
  var txtLight1 = 'En presencia de notario público se firmarán los documentos para el traslado de propiedad.';
  var txtBold2 = 'Pago del banco o institución: ';
  var txtLight2 = 'Dependiendo la forma de pago este puede ser el mismo día de escritura o de 2 a 3 semanas después, al recibirlo se realizará el pago por nuestro servicio.';
  var txtBold3 = 'Entrega física de la propiedad: ';
  var txtLight3 = 'Se entrega la propiedad al comprador en las condiciones pactadas y firmando la entrega.';
  /*
  * creating elements html * *
  */

  var escrituraView = document.createElement('section');
  escrituraView.setAttribute('class', 'boardView__container'); // main elements

  var imageDiv = document.createElement('div');
  var descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'boardView__description');
  imageDiv.setAttribute('class', 'boardView__image'); // main elements children

  var img = document.createElement('img');
  var title = document.createElement('h2');
  var description = document.createElement('ul');
  img.setAttribute('src', '../assets/images/FirmaEscritura.png');
  title.innerText = Title; // description elements

  var breakpoint1 = document.createElement('li');
  var breakpoint2 = document.createElement('li');
  var breakpoint3 = document.createElement('li');
  var span1 = document.createElement('span');
  var span2 = document.createElement('span');
  var span3 = document.createElement('span');
  breakpoint1.innerHTML = "".concat(txtBold1);
  breakpoint2.innerHTML = "".concat(txtBold2);
  breakpoint3.innerHTML = "".concat(txtBold3);
  span1.innerText = "".concat(txtLight1);
  span2.innerText = "".concat(txtLight2);
  span3.innerText = "".concat(txtLight3);
  /*
  * nesting *
  */
  // main elements

  escrituraView.appendChild(imageDiv);
  escrituraView.appendChild(descriptionDiv); // main elements children

  imageDiv.appendChild(img);
  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(description); //  description children

  description.appendChild(breakpoint1);
  description.appendChild(breakpoint2);
  description.appendChild(breakpoint3); // description breakpoint children

  breakpoint1.appendChild(span1);
  breakpoint2.appendChild(span2);
  breakpoint3.appendChild(span3);
  return escrituraView;
};

exports["default"] = _default;