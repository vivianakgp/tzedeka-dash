"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var Title = 'En Promoción';
  var promoMsg = "- Verificamos documentos/ para evitar contratiempos\n  - Resolver tus dudas\n  -Asesoria en tr\xE1mites y costos fiscales\n  - An\xE1lisis de mercado y opini\xF3n de valor/ determinar con precisi\xF3n precio \xF3ptimo Resolver tus dudas\n  -Asesoria en tr\xE1mites y costos fiscales\n  - An\xE1lisis de mercado y opini\xF3n de valor/ determinar con precisi\xF3n precio \xF3ptimo";
  var promoView = document.createElement('div');
  promoView.setAttribute('class', 'promo__container'); // promoView elements

  var description = document.createElement('div');
  var image = document.createElement('div'); // children

  var title = document.createElement('h2');
  var paragraph = document.createElement('p');
  var imgPromo = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = promoMsg;
  imgPromo.setAttribute('src', '../assets/images/Demostración.png'); // promoView elements

  promoView.appendChild(description);
  promoView.appendChild(image); // children

  description.appendChild(title);
  description.appendChild(paragraph);
  image.appendChild(imgPromo);
  return promoView;
};

exports["default"] = _default;