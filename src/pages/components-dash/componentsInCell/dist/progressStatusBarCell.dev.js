"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(currentProgress) {
  var progressStatusBarCell = document.createElement('div');
  progressStatusBarCell.setAttribute('class', 'dash__progressStatusBarCell'); // progressStatusBarCell children

  var currentStatus = document.createElement('div');
  currentStatus.innerText = currentProgress; // user.currentProgressDashViewStr
  // nesting

  progressStatusBarCell.appendChild(currentStatus);
  return progressStatusBarCell;
};

exports["default"] = _default;