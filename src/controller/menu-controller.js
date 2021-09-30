/* eslint-disable no-unused-expressions */
// import vista from '../vista/vista.js';

export default {
  initializer() {
    this.addEvent();
    this.removeCommentModal();
  },
  btnNavIsActive(button) {
    const miPropertyBtn = document.getElementById('miPropertyBtn');
    miPropertyBtn.classList.remove('li1__miPropiedad');
    button.classList.add('li1__miPropiedad');
  },
  openCommentModal(btn) {
    const modalComments = document.getElementById('modalComments');
    modalComments.classList.add('showModal');
    this.btnNavIsActive(btn);
  },
  openShareLinkModal(btn) {
    const modalShareLink = document.getElementById('modalShareLink');
    modalShareLink.classList.add('showModal');
    this.btnNavIsActive(btn);
  },
  openModalRefer(btn) {
    const modalRefer = document.getElementById('modalRefer');
    modalRefer.classList.add('showModal');
    this.btnNavIsActive(btn);
  },
  addEvent() {
    const modalCommentsBtn = document.getElementById('navCommentsBtn');
    const modalShareLinkBtn = document.getElementById('navShareLinkBtn');
    const modalReferBtn = document.getElementById('navReferBtn');
    modalCommentsBtn.addEventListener('click', () => { this.openCommentModal(modalCommentsBtn); });
    modalShareLinkBtn.addEventListener('click', () => { this.openShareLinkModal(modalShareLinkBtn); });
    modalReferBtn.addEventListener('click', () => { this.openModalRefer(modalReferBtn); });
  },
  removeCommentModal() {
    const closeModal = document.getElementById('closeModal');
    const closeShareLinkModal = document.getElementById('closeShareLinkModal');
    const closeModalRefer = document.getElementById('closeModalRefer');
    const modalComments = document.getElementById('modalComments');
    const modalShareLink = document.getElementById('modalShareLink');
    const modalRefer = document.getElementById('modalRefer');
    closeModal.addEventListener('click', () => modalComments.classList.remove('showModal'));
    closeShareLinkModal.addEventListener('click', () => modalShareLink.classList.remove('showModal'));
    closeModalRefer.addEventListener('click', () => modalRefer.classList.remove('showModal'));
  },
};
