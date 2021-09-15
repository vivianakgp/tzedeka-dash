import vista from '../vista/vista.js';

export default {
  openCommentModal() {
    // navLi3.setAttribute('id', 'navCommentsBtn');
    const dashboard = document.getElementById('dashboard');
    const modalCommentsBtn = document.getElementById('navCommentsBtn');
    modalCommentsBtn.addEventListener('click', () => {
      console.log('clickmodal');
      dashboard.appendChild(vista.modals.commentsModal());
    });
  },

};
