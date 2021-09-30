export default () => {
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal-overlay');
  modal.setAttribute('id', 'modalRefer');
  // modal child
  const subModal = document.createElement('div');
  subModal.setAttribute('class', 'modalRefer-container');
  // subModal childre
  const title = document.createElement('h3');
  const inputName = document.createElement('input');
  const inputLastName = document.createElement('input');
  const inputCellPhone = document.createElement('input');
  const inputInterestingOn = document.createElement('div');
  const inputNote = document.createElement('input');
  const buttons = document.createElement('div');
  title.innerHTML = 'Referir a alguien';
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre');
  inputLastName.setAttribute('type', 'text');
  inputLastName.setAttribute('placeholder', 'Apellido');
  inputCellPhone.setAttribute('type', 'text');
  inputCellPhone.setAttribute('placeholder', 'Telefono');
  inputNote.setAttribute('type', 'text');
  inputNote.setAttribute('placeholder', 'Nota');
  // inputInterestingOn children
  const subTitle = document.createElement('p');
  const radioBtn1 = document.createElement('div');
  const radioBtn2 = document.createElement('div');
  subTitle.innerHTML = 'Interesado en:';
  // radio buttons children
  const inputRadio1 = document.createElement('input');
  const inputRadio2 = document.createElement('input');
  const labe1 = document.createElement('label');
  const labe2 = document.createElement('label');
  inputRadio1.setAttribute('type', 'radio');
  inputRadio2.setAttribute('type', 'radio');
  labe1.setAttribute('for', 'venta');
  labe1.innerHTML = 'Venta';
  labe2.setAttribute('for', 'compra');
  labe2.innerHTML = 'Compra';
  // buttons children
  const sendBtn = document.createElement('button');
  const closeBtn = document.createElement('button');
  sendBtn.setAttribute('id', 'send');
  closeBtn.setAttribute('id', 'closeModalRefer');
  sendBtn.innerHTML = 'Enviar';
  closeBtn.innerHTML = 'Cancelar';
  // nesting
  modal.appendChild(subModal);
  subModal.appendChild(title);

  subModal.appendChild(inputName);
  subModal.appendChild(inputLastName);
  subModal.appendChild(inputCellPhone);
  subModal.appendChild(inputInterestingOn);
  subModal.appendChild(inputNote);
  subModal.appendChild(buttons);
  // inputInterestingOn children
  inputInterestingOn.appendChild(subTitle);
  inputInterestingOn.appendChild(radioBtn1);
  inputInterestingOn.appendChild(radioBtn2);
  // radio buttons children
  radioBtn1.appendChild(inputRadio1);
  radioBtn2.appendChild(inputRadio2);
  radioBtn1.appendChild(labe1);
  radioBtn2.appendChild(labe2);

  // buttons children
  buttons.appendChild(sendBtn);
  buttons.appendChild(closeBtn);
  return modal;
};
