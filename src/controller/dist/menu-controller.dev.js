"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vista = _interopRequireDefault(require("../vista/vista.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  openCommentModal: function openCommentModal() {
    // navLi3.setAttribute('id', 'navCommentsBtn');
    var dashboard = document.getElementById('dashboard');
    var modalCommentsBtn = document.getElementById('navCommentsBtn');
    modalCommentsBtn.addEventListener('click', function () {
      console.log('clickmodal');
      dashboard.appendChild(_vista["default"].modals.commentsModal());
    });
  }
};
exports["default"] = _default;