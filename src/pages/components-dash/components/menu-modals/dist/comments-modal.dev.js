"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var modal = document.createElement('div');
  modal.setAttribute('class', 'modal-overlay'); // modal child

  var subModal = document.createElement('div');
  subModal.setAttribute('class', 'modal-container'); // subModal childre

  var title = document.createElement('h3');
  var text = document.createElement('input');
  var buttons = document.createElement('div');
  title.innerHTML = '¿En que podemos mejorar?';
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', 'Escribe aquí tu comentario'); // buttons children

  var sendBtn = document.createElement('button');
  var closeBtn = document.createElement('button');
  sendBtn.innerHTML = 'Enviar';
  closeBtn.innerHTML = 'Cancelar'; // nesting

  modal.appendChild(subModal);
  subModal.appendChild(title);
  subModal.appendChild(text);
  subModal.appendChild(buttons); // buttons children

  buttons.appendChild(sendBtn);
  buttons.appendChild(closeBtn);
  return modal;
};

exports["default"] = _default;