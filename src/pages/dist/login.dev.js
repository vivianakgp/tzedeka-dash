"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var login = document.createElement('div');
  login.setAttribute('class', 'login');
  /**
   * crating elements
    -formContainer
    -imgContainer
   */

  var formContainer = document.createElement('div');
  var imgContainer = document.createElement('div'); // only in desktop

  imgContainer.setAttribute('class', 'login__imgContainer');
  formContainer.setAttribute('class', 'login__formContainer'); // formContainer children

  var formLogin = document.createElement('form');
  var divGreyDecoration = document.createElement('div');
  formLogin.setAttribute('class', 'login__form');
  formLogin.setAttribute('id', 'formLogin');
  divGreyDecoration.setAttribute('class', 'login_divDecoration'); // imgContainer / img child

  var img = document.createElement('img');
  img.setAttribute('src', '../assets/images/img-dashboard-login.png'); // formContainer / formLogin children

  var h1 = document.createElement('h1');
  var inputEmail = document.createElement('input');
  var inputPassword = document.createElement('input');
  var logInMessage = document.createElement('div');
  var btn = document.createElement('button');
  var paragraph = document.createElement('p');
  var anchor = document.createElement('a');
  h1.innerHTML = 'Espacio para clientes';
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('name', 'email');
  inputPassword.setAttribute('type', 'text');
  inputPassword.setAttribute('placeholder', 'ID Cliente');
  inputPassword.setAttribute('name', 'password');
  logInMessage.setAttribute('id', 'loginMessage');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('value', 'Ingresar');
  btn.setAttribute('id', 'btn__ingresar');
  btn.innerHTML = 'Ingresar';
  paragraph.innerHTML = '¿No has trabajado con nosotros?';
  anchor.innerHTML = 'Empieza hoy';
  anchor.setAttribute('href', '#/');
  /**
   * nesting
   */
  // main elements

  login.appendChild(formContainer);
  login.appendChild(imgContainer); // ony in desktop
  // formContainer children

  formContainer.appendChild(divGreyDecoration);
  formContainer.appendChild(formLogin); // imgContainer child

  imgContainer.appendChild(img); // formContainer / formLogin children

  formLogin.appendChild(h1);
  formLogin.appendChild(inputEmail);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(logInMessage);
  formLogin.appendChild(btn);
  formLogin.appendChild(paragraph);
  paragraph.appendChild(anchor);
  return login;
};

exports["default"] = _default;