"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var btnsChangeViewsToCell = document.createElement('div');
  btnsChangeViewsToCell.setAttribute('class', 'blackboard__containerBtnChangeView'); // btnsChangeViewsToCell children *

  var btnPreviousProgressView = document.createElement('button');
  var btnNextProgressView = document.createElement('button');
  btnNextProgressView.setAttribute('id', 'btnNextProgressView');
  btnNextProgressView.setAttribute('class', 'BtnChangeView');
  btnNextProgressView.innerHTML = 'Siguiente';
  btnPreviousProgressView.setAttribute('id', 'btnPreviousProgressView');
  btnPreviousProgressView.setAttribute('class', 'BtnChangeView');
  btnPreviousProgressView.innerHTML = 'Anterior'; // nesting

  btnsChangeViewsToCell.appendChild(btnPreviousProgressView);
  btnsChangeViewsToCell.appendChild(btnNextProgressView);
  return btnsChangeViewsToCell;
};

exports["default"] = _default;