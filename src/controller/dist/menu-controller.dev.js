"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vista = _interopRequireDefault(require("../vista/vista.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  initializer: function initializer() {
    this.addCommentModal();
    this.addEvent();
  },
  addCommentModal: function addCommentModal() {
    var dashboard = document.getElementById('dashboard');
    dashboard.appendChild(_vista["default"].modals.commentsModal());
    this.removeCommentModal();
  },
  addEvent: function addEvent() {
    var modalCommentsBtn = document.getElementById('navCommentsBtn');
    var modal = document.getElementById('modal');
    modalCommentsBtn.addEventListener('click', function () {
      modal.classList.add('show');
    });
  },
  removeCommentModal: function removeCommentModal() {
    var closeModal = document.getElementById('closeModal');
    var modal = document.getElementById('modal');
    closeModal.addEventListener('click', function () {
      modal.classList.remove('show');
    });
  }
};
exports["default"] = _default;