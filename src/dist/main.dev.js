"use strict";

var _controller = require("./controller/controller.js");

// AQUI INICIA LA APPLICACION
var initial = function initial() {
  var hash = window.location.hash;

  _controller.controller.changeMainView(hash);

  window.addEventListener('hashchange', function () {
    _controller.controller.changeMainView(hash);
  });
};

window.addEventListener('load', initial);