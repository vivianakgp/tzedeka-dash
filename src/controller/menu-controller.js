import vista from '../vista/vista.js';

export default {

  initializer() {
    this.addCommentModal();
    this.addEvent();
  },
  addCommentModal() {
    const dashboard = document.getElementById('dashboard');
    dashboard.appendChild(vista.modals.commentsModal());
    this.removeCommentModal();
  },
  addEvent() {
    const modalCommentsBtn = document.getElementById('navCommentsBtn');
    const modal = document.getElementById('modal');
    modalCommentsBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });
  },
  removeCommentModal() {
    const closeModal = document.getElementById('closeModal');
    const modal = document.getElementById('modal');
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  },

};
