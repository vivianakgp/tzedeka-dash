"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methodsCell = void 0;

var _vista = require("../vista/vista.js");

// metodos para el cell
// eslint-disable-next-line import/no-cycle
var dashboardViews = _vista.vista.dashboardViews; // convierte el objeto dashboardViews en un array

var arrayProgressViews = Object.values(dashboardViews);

var counter = _vista.vista.transformCurrentViewInDashToNumber();

var methodsCell = {
  // -- traversesArrayForward: RECORRE arrayProgressViews ADELANTE.
  traversesArrayForward: function traversesArrayForward() {
    var btnNextProgressView = document.getElementById('btnNextProgressView');
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    btnPreviousProgressView.addEventListener('click', methodsCell.travelsArrayBackwards);
    btnPreviousProgressView.classList.remove('hideBtn');
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    if (counter < arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[counter + 1]); // eslint-disable-next-line no-plusplus

      counter++;
    } else if (counter === arrayProgressViews.length - 2) {
      blackboard.appendChild(arrayProgressViews[counter + 1]);
      btnNextProgressView.classList.add('hideBtn');
      btnNextProgressView.removeEventListener('click', methodsCell.traversesArrayForward); // eslint-disable-next-line no-plusplus

      counter++;
    }
  },
  // -- progressArrayBackwards:RECORRE EL ARRAY DE VISTAS*/DASH ATRAS.
  travelsArrayBackwards: function travelsArrayBackwards() {
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');
    var btnNextProgressView = document.getElementById('btnNextProgressView');
    btnNextProgressView.addEventListener('click', methodsCell.traversesArrayForward);
    btnNextProgressView.classList.remove('hideBtn');
    var blackboard = document.getElementById('Blackboard');
    blackboard.innerHTML = '';

    if (counter === 1) {
      blackboard.appendChild(arrayProgressViews[counter - 1]);
      btnPreviousProgressView.classList.add('hideBtn');
      btnPreviousProgressView.removeEventListener('click', methodsCell.travelsArrayBackwards); // eslint-disable-next-line no-plusplus

      counter--;
    } else {
      blackboard.appendChild(arrayProgressViews[counter - 1]); // eslint-disable-next-line no-plusplus

      counter--;
    }
  },
  //  controllerBtnNextProgressViewInCell: PRENDE Y APAGA EL BOTON NEXT.
  controllerBtnNextProgressViewInCell: function controllerBtnNextProgressViewInCell() {
    var btnNextProgressView = document.getElementById('btnNextProgressView');

    if (counter === arrayProgressViews.length - 1) {
      btnNextProgressView.removeEventListener('click', this.traversesArrayForward);
      btnNextProgressView.classList.add('hideBtn');
    } else {
      btnNextProgressView.addEventListener('click', this.traversesArrayForward);
    }
  },
  // controllerBtnPreviousProgressViewInCell : PRENDE Y APAGA EL BOTON PREVIOUS.
  controllerBtnPreviousProgressViewInCell: function controllerBtnPreviousProgressViewInCell() {
    var btnPreviousProgressView = document.getElementById('btnPreviousProgressView');

    if (counter === 0) {
      btnPreviousProgressView.removeEventListener('click', this.travelsArrayBackwards);
      btnPreviousProgressView.classList.add('hideBtn');
    } else {
      btnPreviousProgressView.addEventListener('click', this.travelsArrayBackwards);
    }
  }
};
exports.methodsCell = methodsCell;