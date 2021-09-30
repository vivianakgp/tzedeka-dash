"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var modal = document.createElement('div');
  modal.setAttribute('class', 'commentsModal');
  modal.setAttribute('id', 'modalComments'); // modal child

  var subModal = document.createElement('div');
  subModal.setAttribute('class', 'commentsModal-container'); // subModal childre

  var title = document.createElement('h3');
  var text = document.createElement('input');
  var buttons = document.createElement('div');
  title.innerHTML = '¿En que podemos mejorar?';
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', 'Escribe aquí tu comentario'); // buttons children

  var sendBtn = document.createElement('button');
  var closeBtn = document.createElement('button');
  sendBtn.setAttribute('id', 'send');
  closeBtn.setAttribute('id', 'closeModal');
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