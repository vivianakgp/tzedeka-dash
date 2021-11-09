/* eslint-disable no-unused-expressions */
// import vista from '../vista/vista.js';

export default {
  initializer() {
    this.addEventOpenModal();
    this.addEventCloseModal();
  },
  btnNavIsActive(button) {
    const miPropertyBtn = document.getElementById('miPropertyBtn');
    miPropertyBtn.classList.remove('isDefaultActive');
    button.classList.add('btnNavActive');
  },
  btnNavIsDisabled(button) {
    const miPropertyBtn = document.getElementById('miPropertyBtn');
    button.classList.remove('btnNavActive');
    miPropertyBtn.classList.add('isDefaultActive');
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
  closeCommentModal() {
    const modalComments = document.getElementById('modalComments');
    const modalCommentsBtn = document.getElementById('navCommentsBtn');
    modalComments.classList.remove('showModal');
    this.btnNavIsDisabled(modalCommentsBtn);
  },
  closeShareLinkModal() {
    const modalShareLink = document.getElementById('modalShareLink');
    const modalShareLinkBtn = document.getElementById('navShareLinkBtn');
    modalShareLink.classList.remove('showModal');
    this.btnNavIsDisabled(modalShareLinkBtn);
  },
  closeModalRefer() {
    const modalReferBtn = document.getElementById('navReferBtn');
    const modalRefer = document.getElementById('modalRefer');
    modalRefer.classList.remove('showModal');
    this.btnNavIsDisabled(modalReferBtn);
  },
  addEventOpenModal() {
    const modalCommentsBtn = document.getElementById('navCommentsBtn');
    const modalShareLinkBtn = document.getElementById('navShareLinkBtn');
    const modalReferBtn = document.getElementById('navReferBtn');
    modalCommentsBtn.addEventListener('click', () => { this.openCommentModal(modalCommentsBtn); });
    modalShareLinkBtn.addEventListener('click', () => { this.openShareLinkModal(modalShareLinkBtn); });
    modalReferBtn.addEventListener('click', () => { this.openModalRefer(modalReferBtn); });
  },
  addEventCloseModal() {
    const closeCommentModal = document.getElementById('closeCommentModal');
    const closeShareLinkModal = document.getElementById('closeShareLinkModal');
    const closeModalRefer = document.getElementById('closeModalRefer');
    closeCommentModal.addEventListener('click', () => { this.closeCommentModal(); });
    closeShareLinkModal.addEventListener('click', () => { this.closeShareLinkModal(); });
    closeModalRefer.addEventListener('click', () => { this.closeModalRefer(); });
  },
};
