"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var Title = 'Tramite y Avalúo';
  var tramiteMsg = "\n  - Verificamos documentos/ para evitar contratiempos\n  - Resolver tus dudas\n  - Asesoria en tr\xE1mites y costos fiscales\n  - An\xE1lisis de mercado y opini\xF3n de valor/ determinar con precisi\xF3n precio \xF3ptimo Resolver tus dudas\n  - Asesoria en tr\xE1mites y costos fiscales\n  - An\xE1lisis de mercado y opini\xF3n de valor/ determinar con precisi\xF3n precio \xF3ptimo";
  var tramiteView = document.createElement('section');
  tramiteView.setAttribute('class', 'tramite__container'); // tramiteView elements

  var description = document.createElement('div');
  var image = document.createElement('div');
  description.setAttribute('class', 'tramite__description');
  image.setAttribute('class', 'tramite__image'); // children

  var title = document.createElement('h2');
  var paragraph = document.createElement('p');
  var imgTramite = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = tramiteMsg;
  imgTramite.setAttribute('src', '../assets/images/Demostración.png'); // tramiteView elements

  tramiteView.appendChild(image);
  tramiteView.appendChild(description); // children

  image.appendChild(imgTramite);
  description.appendChild(title);
  description.appendChild(paragraph);
  return tramiteView;
};

exports["default"] = _default;