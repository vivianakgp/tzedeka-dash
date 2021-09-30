"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var modal = document.createElement('div');
  modal.setAttribute('class', 'modal-overlay');
  modal.setAttribute('id', 'modalRefer'); // modal child

  var subModal = document.createElement('div');
  subModal.setAttribute('class', 'modalRefer-container'); // subModal childre

  var title = document.createElement('h3');
  var inputName = document.createElement('input');
  var inputLastName = document.createElement('input');
  var inputCellPhone = document.createElement('input');
  var inputInterestingOn = document.createElement('div');
  var inputNote = document.createElement('input');
  var buttons = document.createElement('div');
  title.innerHTML = 'Referir a alguien';
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre');
  inputLastName.setAttribute('type', 'text');
  inputLastName.setAttribute('placeholder', 'Apellido');
  inputCellPhone.setAttribute('type', 'text');
  inputCellPhone.setAttribute('placeholder', 'Telefono');
  inputNote.setAttribute('type', 'text');
  inputNote.setAttribute('placeholder', 'Nota'); // inputInterestingOn children

  var subTitle = document.createElement('p');
  var radioBtn1 = document.createElement('div');
  var radioBtn2 = document.createElement('div');
  subTitle.innerHTML = 'Interesado en:'; // radio buttons children

  var inputRadio1 = document.createElement('input');
  var inputRadio2 = document.createElement('input');
  var labe1 = document.createElement('label');
  var labe2 = document.createElement('label');
  inputRadio1.setAttribute('type', 'radio');
  inputRadio2.setAttribute('type', 'radio');
  labe1.setAttribute('for', 'venta');
  labe1.innerHTML = 'Venta';
  labe2.setAttribute('for', 'compra');
  labe2.innerHTML = 'Compra'; // buttons children

  var sendBtn = document.createElement('button');
  var closeBtn = document.createElement('button');
  sendBtn.setAttribute('id', 'send');
  closeBtn.setAttribute('id', 'closeModalRefer');
  sendBtn.innerHTML = 'Enviar';
  closeBtn.innerHTML = 'Cancelar'; // nesting

  modal.appendChild(subModal);
  subModal.appendChild(title);
  subModal.appendChild(inputName);
  subModal.appendChild(inputLastName);
  subModal.appendChild(inputCellPhone);
  subModal.appendChild(inputInterestingOn);
  subModal.appendChild(inputNote);
  subModal.appendChild(buttons); // inputInterestingOn children

  inputInterestingOn.appendChild(subTitle);
  inputInterestingOn.appendChild(radioBtn1);
  inputInterestingOn.appendChild(radioBtn2); // radio buttons children

  radioBtn1.appendChild(inputRadio1);
  radioBtn2.appendChild(inputRadio2);
  radioBtn1.appendChild(labe1);
  radioBtn2.appendChild(labe2); // buttons children

  buttons.appendChild(sendBtn);
  buttons.appendChild(closeBtn);
  return modal;
};

exports["default"] = _default;