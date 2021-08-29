export default () => {
  const login = document.createElement('div');
  login.setAttribute('class', 'login');
  /**
   * crating elements
    -formLoginContainer
    -imgLoginContainer
   */
  const formLoginContainer = document.createElement('div');
  const imgLoginContainer = document.createElement('div');// only in desktop
  imgLoginContainer.setAttribute('class', 'imgLogin__Container');
  formLoginContainer.setAttribute('class', 'formLogin__Container');

  // formLoginContainer children
  const formLogin = document.createElement('form');
  const divGreyDecoration = document.createElement('div');
  formLogin.setAttribute('class', 'formLogin');
  formLogin.setAttribute('id', 'formLogin');
  divGreyDecoration.setAttribute('class', 'formLogin__div--grey');

  // imgLoginContainer / img child
  const img = document.createElement('img');
  img.setAttribute('src', '../assets/images/img-dashboard-login.png');
  img.setAttribute('class', 'imgLoginContainer__img');

  // formLoginContainer / formLogin children
  const h1 = document.createElement('h1');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const logInMessage = document.createElement('p');
  const btn = document.createElement('button');
  const paragraph = document.createElement('p');
  const anchor = document.createElement('a');

  h1.innerHTML = 'Espacio para clientes';
  h1.setAttribute('class', 'formLogin__h1');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('class', 'formLogin__input--id');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('name', 'email');
  inputPassword.setAttribute('type', 'text');
  inputPassword.setAttribute('class', 'formLogin__input--pass');
  inputPassword.setAttribute('placeholder', 'ID Cliente');
  inputPassword.setAttribute('name', 'password');
  logInMessage.setAttribute('class', 'formLogin__showAuthErr');
  logInMessage.setAttribute('id', 'loginMessage');
  btn.setAttribute('class', 'formLogin__btn');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('value', 'Ingresar');
  btn.setAttribute('id', 'btn__ingresar');
  btn.innerHTML = 'Ingresar';
  paragraph.setAttribute('class', 'formLogin__paragraph');
  paragraph.innerHTML = '¿No has trabajado con nosotros?';
  anchor.innerHTML = 'Empieza hoy';
  anchor.setAttribute('href', '#/');
  anchor.setAttribute('class', 'formLogin__anchor');
  /**
   * nesting
   */
  // main elements
  login.appendChild(formLoginContainer);
  login.appendChild(imgLoginContainer);// ony in desktop
  // formLoginContainer children
  formLoginContainer.appendChild(divGreyDecoration);
  formLoginContainer.appendChild(formLogin);
  // imgLoginContainer child
  imgLoginContainer.appendChild(img);
  // formLoginContainer / formLogin children
  formLogin.appendChild(h1);
  formLogin.appendChild(inputEmail);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(logInMessage);
  formLogin.appendChild(btn);
  formLogin.appendChild(paragraph);
  paragraph.appendChild(anchor);

  return login;
};
