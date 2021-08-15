"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

/* eslint-disable no-undef */
// import { controller } from './controller/controller.js';
// creo un objeto llamado modelo que se encargara de hacer las llamadas a la api de firebase
// recive informacion del objeto contolador
// returners respuestas al controller
// exports mi objet model/ importado en el controller
var model = {
  // ** ingresar con email y password
  logInAuth: function logInAuth(userData) {
    return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
  },
  // ** establecer un observador en el objeto Auth **//
  // eslint-disable-next-line no-undef
  getCurrentUser: function getCurrentUser(user) {
    return firebase.auth().onAuthStateChanged(user);
  }
};
exports.model = model;