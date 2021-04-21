"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var login = document.createElement('div');
  login.setAttribute('class', 'login'); // *** component formLogin ***

  var formLogin = document.createElement('form');
  formLogin.setAttribute('class', 'formLogin');
  formLogin.setAttribute('id', 'formLogin'); // childs

  var div = document.createElement('div');
  div.setAttribute('class', 'formLogin__div--grey');
  var h1 = document.createElement('h1');
  h1.innerHTML = 'Espacio para clientes';
  h1.setAttribute('class', 'formLogin__h1');
  var inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('class', 'formLogin__input--id');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('name', 'email');
  var inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'text');
  inputPassword.setAttribute('class', 'formLogin__input--pass');
  inputPassword.setAttribute('placeholder', 'ID Cliente');
  inputPassword.setAttribute('name', 'password');
  var btn = document.createElement('button');
  btn.setAttribute('class', 'formLogin__btn');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('value', 'Ingresar');
  btn.setAttribute('id', 'btn__ingresar');
  btn.innerHTML = 'Ingresar';
  var paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'formLogin__paragraph');
  paragraph.innerHTML = '¿No has trabajado con nosotros?';
  var anchor = document.createElement('a');
  anchor.innerHTML = 'Empieza hoy';
  anchor.setAttribute('href', '#/');
  anchor.setAttribute('class', 'formLogin__anchor'); // *** img Login ***

  var imgLogin = document.createElement('div');
  imgLogin.setAttribute('class', 'imgLogin'); // childs

  var img = document.createElement('img');
  img.setAttribute('src', '../assets/images/img-dashboard-login.png');
  img.setAttribute('class', 'imgLogin__img'); // iniciamos a anidar los elementos

  login.appendChild(formLogin);
  formLogin.appendChild(div);
  formLogin.appendChild(h1);
  formLogin.appendChild(inputEmail);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(btn);
  formLogin.appendChild(paragraph);
  paragraph.appendChild(anchor);
  imgLogin.appendChild(img);
  login.appendChild(imgLogin);
  return login;
};

exports["default"] = _default;