"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var bars = document.createElement('div');
  bars.setAttribute('class', 'bars'); // bars elements

  var block1 = document.createElement('div');
  var block2 = document.createElement('div');
  var block3 = document.createElement('div');
  var block4 = document.createElement('div'); // children

  var block1Title = document.createElement('span');
  var block1Div = document.createElement('div');
  var block2Title = document.createElement('span');
  var block2Div = document.createElement('div');
  var block3Title = document.createElement('span');
  var block3Div = document.createElement('div');
  var block4Title = document.createElement('span');
  var block4Div = document.createElement('div');
  block1Title.innerHTML = 'Preparación';
  block1Div.setAttribute('data-progress', '1');
  block2Title.innerHTML = 'En Promoción';
  block2Div.setAttribute('data-progress', '2');
  block3Title.innerHTML = 'Tramite y Avalúo';
  block3Div.setAttribute('data-progress', '3');
  block4Title.innerHTML = 'Escritura';
  block4Div.setAttribute('data-progress', '4'); // bars elements

  bars.appendChild(block1);
  bars.appendChild(block2);
  bars.appendChild(block3);
  bars.appendChild(block4); // children

  block1.appendChild(block1Title);
  block1.appendChild(block1Div);
  block2.appendChild(block2Title);
  block2.appendChild(block2Div);
  block3.appendChild(block3Title);
  block3.appendChild(block3Div);
  block4.appendChild(block4Title);
  block4.appendChild(block4Div);
  return bars;
};

exports["default"] = _default;