export default () => {
  const modal = document.createElement('div');
  modal.setAttribute('class', 'commentsModal');
  modal.setAttribute('id', 'modalComments');
  // modal child
  const subModal = document.createElement('div');
  subModal.setAttribute('class', 'commentsModal-container');
  // subModal childre
  const title = document.createElement('h3');
  const text = document.createElement('input');
  const buttons = document.createElement('div');
  title.innerHTML = '¿En que podemos mejorar?';
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', 'Escribe aquí tu comentario');
  // buttons children
  const sendBtn = document.createElement('button');
  const closeBtn = document.createElement('button');
  sendBtn.setAttribute('id', 'send');
  closeBtn.setAttribute('id', 'closeCommentModal');
  sendBtn.innerHTML = 'Enviar';
  closeBtn.innerHTML = 'Cancelar';
  // nesting
  modal.appendChild(subModal);
  subModal.appendChild(title);
  subModal.appendChild(text);
  subModal.appendChild(buttons);
  // buttons children
  buttons.appendChild(sendBtn);
  buttons.appendChild(closeBtn);

  return modal;
};
