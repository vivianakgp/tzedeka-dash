"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-unused-expressions */
// import vista from '../vista/vista.js';
var _default = {
  initializer: function initializer() {
    this.addEvent();
    this.removeCommentModal();
  },
  btnNavIsActive: function btnNavIsActive(button) {
    var miPropertyBtn = document.getElementById('miPropertyBtn');
    miPropertyBtn.classList.remove('li1__miPropiedad');
    button.classList.add('li1__miPropiedad');
  },
  openCommentModal: function openCommentModal(btn) {
    var modalComments = document.getElementById('modalComments');
    modalComments.classList.add('showModal');
    this.btnNavIsActive(btn);
  },
  openShareLinkModal: function openShareLinkModal(btn) {
    var modalShareLink = document.getElementById('modalShareLink');
    modalShareLink.classList.add('showModal');
    this.btnNavIsActive(btn);
  },
  openModalRefer: function openModalRefer(btn) {
    var modalRefer = document.getElementById('modalRefer');
    modalRefer.classList.add('showModal');
    this.btnNavIsActive(btn);
  },
  addEvent: function addEvent() {
    var _this = this;

    var modalCommentsBtn = document.getElementById('navCommentsBtn');
    var modalShareLinkBtn = document.getElementById('navShareLinkBtn');
    var modalReferBtn = document.getElementById('navReferBtn');
    modalCommentsBtn.addEventListener('click', function () {
      _this.openCommentModal(modalCommentsBtn);
    });
    modalShareLinkBtn.addEventListener('click', function () {
      _this.openShareLinkModal(modalShareLinkBtn);
    });
    modalReferBtn.addEventListener('click', function () {
      _this.openModalRefer(modalReferBtn);
    });
  },
  removeCommentModal: function removeCommentModal() {
    var closeModal = document.getElementById('closeModal');
    var closeShareLinkModal = document.getElementById('closeShareLinkModal');
    var closeModalRefer = document.getElementById('closeModalRefer');
    var modalComments = document.getElementById('modalComments');
    var modalShareLink = document.getElementById('modalShareLink');
    var modalRefer = document.getElementById('modalRefer');
    closeModal.addEventListener('click', function () {
      return modalComments.classList.remove('showModal');
    });
    closeShareLinkModal.addEventListener('click', function () {
      return modalShareLink.classList.remove('showModal');
    });
    closeModalRefer.addEventListener('click', function () {
      return modalRefer.classList.remove('showModal');
    });
  }
};
exports["default"] = _default;