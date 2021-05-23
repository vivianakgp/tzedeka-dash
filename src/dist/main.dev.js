"use strict";

var _controller = require("./controller/controller.js");

var initial = function initial() {
  // eslint-disable-next-line max-len
  // console.log('esta es la primer funcion(initial) que extrae el location.hash y lo envia al controlador');
  var hash = window.location.hash;
  console.log(hash);

  _controller.controller.templateChange(hash);

  window.addEventListener('hashchange', function () {
    _controller.controller.templateChange(hash);
  });
};

window.addEventListener('load', initial);