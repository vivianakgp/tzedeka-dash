"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var Title = 'Preparación';
  /*
  * message description *
  */

  var txtBold1 = 'Fotografía y video:  ';
  var txtLight1 = 'Tomamos la multimedia necesaría para la promoción, edición y postproducción.';
  var txtBold2 = 'Ficha de propiedad:  ';
  var txtLight2 = 'Con la información y fotografías recabadas diseñamos una ficha con lo más importante.';
  var txtBold3 = 'Carga de propiedad: ';
  var txtLight3 = 'Subimos la ficha de propiedad a nuestra web tzedeka.com y sitios de busqueda inmobiliaria.';
  var txtBold4 = 'Diseño de publicidad y material gráfico ';
  /*
  * creating elements html*
  */

  var preparationView = document.createElement('section');
  preparationView.setAttribute('class', 'prepaContainer'); // main elements

  var imageDiv = document.createElement('div');
  var descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'prepaDescription');
  imageDiv.setAttribute('class', 'prepaImage'); // main elements children

  var img = document.createElement('img');
  var title = document.createElement('h2');
  var description = document.createElement('ul');
  img.setAttribute('src', '../assets/images/CasaEnVenta.png');
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
  /*
  * nesting *
  */
  // main elements

  preparationView.appendChild(imageDiv);
  preparationView.appendChild(descriptionDiv); // main elements children

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
  return preparationView;
};

exports["default"] = _default;