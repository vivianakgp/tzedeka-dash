"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var Title = 'Promoción';
  /*
  * message description *
  */

  var txtBold1 = 'Nuestra página web: ';
  var txtLight1 = 'Nuestra carta estrella para tu propiedad, el mejor diseño y estrategias van dirigidas hacía aqui.';
  var txtBold2 = 'Portales inmobiliarios: ';
  var txtLight2 = 'Sitios como Inmuebles24 y vivanuncios reciben a miles de personas que buscan una nueva propiedad y la tuya estara entre las opciones que veran.';
  var txtBold3 = 'Redes sociales: ';
  var txtLight3 = 'Compartimos tu propiedad en diferentes redes sociales, creamos campañas y anuncios dirigidos.';
  var txtBold4 = 'Red de contacto e inmobiliarios: ';
  var txtLight4 = 'Presentamos a inmobiliaria y agentes tu propiedad como una opción para sus clientes.';
  /*
  * creating elements html * *
  */

  var promoView = document.createElement('section');
  promoView.setAttribute('class', 'boardView__container'); // main elements

  var imageDiv = document.createElement('div');
  var descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'boardView__description');
  imageDiv.setAttribute('class', 'boardView__image'); // main elements children

  var img = document.createElement('img');
  var title = document.createElement('h2');
  var description = document.createElement('ul');
  img.setAttribute('src', '../assets/images/Promoción.png');
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

  promoView.appendChild(imageDiv);
  promoView.appendChild(descriptionDiv); // main elements children

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
  return promoView;
};

exports["default"] = _default;