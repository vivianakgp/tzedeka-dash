"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-unused-expressions */
// import vista from '../vista/vista.js';
var _default = {
  initializer: function initializer() {
    this.addEventOpenModal();
    this.addEventCloseModal();
  },
  btnNavIsActive: function btnNavIsActive(button) {
    var miPropertyBtn = document.getElementById('miPropertyBtn');
    miPropertyBtn.classList.remove('isDefaultActive');
    button.classList.add('btnNavActive');
  },
  btnNavIsDisabled: function btnNavIsDisabled(button) {
    var miPropertyBtn = document.getElementById('miPropertyBtn');
    button.classList.remove('btnNavActive');
    miPropertyBtn.classList.add('isDefaultActive');
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
  closeCommentModal: function closeCommentModal() {
    var modalComments = document.getElementById('modalComments');
    var modalCommentsBtn = document.getElementById('navCommentsBtn');
    modalComments.classList.remove('showModal');
    this.btnNavIsDisabled(modalCommentsBtn);
  },
  closeShareLinkModal: function closeShareLinkModal() {
    var modalShareLink = document.getElementById('modalShareLink');
    var modalShareLinkBtn = document.getElementById('navShareLinkBtn');
    modalShareLink.classList.remove('showModal');
    this.btnNavIsDisabled(modalShareLinkBtn);
  },
  closeModalRefer: function closeModalRefer() {
    var modalReferBtn = document.getElementById('navReferBtn');
    var modalRefer = document.getElementById('modalRefer');
    modalRefer.classList.remove('showModal');
    this.btnNavIsDisabled(modalReferBtn);
  },
  addEventOpenModal: function addEventOpenModal() {
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
  addEventCloseModal: function addEventCloseModal() {
    var _this2 = this;

    var closeCommentModal = document.getElementById('closeCommentModal');
    var closeShareLinkModal = document.getElementById('closeShareLinkModal');
    var closeModalRefer = document.getElementById('closeModalRefer');
    closeCommentModal.addEventListener('click', function () {
      _this2.closeCommentModal();
    });
    closeShareLinkModal.addEventListener('click', function () {
      _this2.closeShareLinkModal();
    });
    closeModalRefer.addEventListener('click', function () {
      _this2.closeModalRefer();
    });
  }
};
exports["default"] = _default;