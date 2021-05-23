"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var Title = 'Escritura';
  var escrituraMsg = "\n  - Verificamos documentos/ para evitar contratiempos\n  - Resolver tus dudas\n  - Asesoria en tr\xE1mites y costos fiscales\n  - An\xE1lisis de mercado y opini\xF3n de valor/ determinar con precisi\xF3n precio \xF3ptimo Resolver tus dudas\n  - Asesoria en tr\xE1mites y costos fiscales\n  - An\xE1lisis de mercado y opini\xF3n de valor/ determinar con precisi\xF3n precio \xF3ptimo";
  var escrituraView = document.createElement('section');
  escrituraView.setAttribute('class', 'escritura__container'); // escrituraView elements

  var description = document.createElement('div');
  var image = document.createElement('div');
  description.setAttribute('class', 'escritura__description');
  image.setAttribute('class', 'escritura__image'); // children

  var title = document.createElement('h2');
  var paragraph = document.createElement('p');
  var imgEscritura = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = escrituraMsg;
  imgEscritura.setAttribute('src', '../assets/images/FirmaEscritura.png'); // escrituraView elements

  escrituraView.appendChild(image);
  escrituraView.appendChild(description); // children

  image.appendChild(imgEscritura);
  description.appendChild(title);
  description.appendChild(paragraph);
  return escrituraView;
};

exports["default"] = _default;