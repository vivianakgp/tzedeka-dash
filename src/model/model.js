/* eslint-disable no-undef */
// import { controller } from './controller/controller.js';

// creo un objeto llamado modelo que se encargara de hacer las llamadas a la api de firebase
// recive informacion del objeto contolador
// returners respuestas al controller
// exports mi objet model/ importado en el controller

export const model = {
  // ** ingresar con email y password
  logInAuth: (userData) => firebase.auth()
    .signInWithEmailAndPassword(userData.email, userData.password),
  // ** establecer un observador en el objeto Auth **//
  // eslint-disable-next-line no-undef
  getCurrentUser: (user) => firebase.auth().onAuthStateChanged(user),
};
