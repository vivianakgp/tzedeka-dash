"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var Title = 'Escritura';
  var escrituraMsg = "- Verificamos documentos/ para evitar contratiempos\n  - Resolver tus dudas\n  -Asesoria en tr\xE1mites y costos fiscales\n  - An\xE1lisis de mercado y opini\xF3n de valor/ determinar con precisi\xF3n precio \xF3ptimo Resolver tus dudas\n  -Asesoria en tr\xE1mites y costos fiscales\n  - An\xE1lisis de mercado y opini\xF3n de valor/ determinar con precisi\xF3n precio \xF3ptimo";
  var escrituraView = document.createElement('div');
  escrituraView.setAttribute('class', 'escritura__container'); // escrituraView elements

  var description = document.createElement('div');
  var image = document.createElement('div'); // children

  var title = document.createElement('h2');
  var paragraph = document.createElement('p');
  var imgEscritura = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = escrituraMsg;
  imgEscritura.setAttribute('src', '../assets/images/Firma escritura.png'); // escrituraView elements

  escrituraView.appendChild(description);
  escrituraView.appendChild(image); // children

  description.appendChild(title);
  description.appendChild(paragraph);
  image.appendChild(imgEscritura);
  return escrituraView;
};

exports["default"] = _default;