"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var Title = 'Tramite y Avalúo';
  /*
  * message description *
  */

  var txtBold1 = 'Avalúo: ';
  var txtLight1 = 'Se envía con cita a un valuador a tu propiedad quien calculará y revisará que el precio coincida con el valor.';
  var txtBold2 = 'Proceso del crédito: ';
  var txtLight2 = 'Dependiendo el tipo de crédito y fuente de financiamiento el proceso puede durar 3 a 5 semanas.';
  var txtBold3 = 'Expediente de comprador: ';
  var txtLight3 = 'Para el crédito y escritura se recaban documentos financieros y de identificación.';
  var txtBold4 = 'Expediente de vendedor: ';
  var txtLight4 = 'Te pediremos documentos de identificación, financieros y certificados de la propiedad.';
  /*
  * creating elements html * *
  */

  var tramiteView = document.createElement('section');
  tramiteView.setAttribute('class', 'boardView__container'); // main elements

  var imageDiv = document.createElement('div');
  var descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'boardView__description');
  imageDiv.setAttribute('class', 'boardView__description'); // main elements children

  var img = document.createElement('img');
  var title = document.createElement('h2');
  var description = document.createElement('ul');
  img.setAttribute('src', '../assets/images/Demostración.png');
  title.innerText = Title; // description elements

  var breakpoint1 = document.createElement('li');
  var breakpoint2 = document.createElement('li');
  var breakpoint3 = document.createElement('li');
  var breakpoint4 = document.createElement('li');
  var span1 = document.createElement('span');
  var span2 = document.createElement('span');
  var span3 = document.createElement('span');
  var span4 = document.createElement('span');
  breakpoint1.innerHTML = "".concat(txtBold1);
  breakpoint2.innerHTML = "".concat(txtBold2);
  breakpoint3.innerHTML = "".concat(txtBold3);
  breakpoint4.innerHTML = "".concat(txtBold4);
  span1.innerText = "".concat(txtLight1);
  span2.innerText = "".concat(txtLight2);
  span3.innerText = "".concat(txtLight3);
  span4.innerText = "".concat(txtLight4);
  /*
  * nesting *
  */
  // main elements

  tramiteView.appendChild(imageDiv);
  tramiteView.appendChild(descriptionDiv); // main elements children

  imageDiv.appendChild(img);
  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(description); //  description children

  description.appendChild(breakpoint1);
  description.appendChild(breakpoint2);
  description.appendChild(breakpoint3);
  description.appendChild(breakpoint4); // description breakpoint children

  breakpoint1.appendChild(span1);
  breakpoint2.appendChild(span2);
  breakpoint3.appendChild(span3);
  breakpoint4.appendChild(span4);
  return tramiteView;
};

exports["default"] = _default;