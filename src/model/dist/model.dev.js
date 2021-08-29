"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;
var model = {
  // logInAuth: AUTENTIFICAR USUARIIO
  userAuth: function userAuth(userData) {
    // eslint-disable-next-line no-undef
    return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
  },
  // ** establecer un observador en el objeto Auth **//
  // eslint-disable-next-line no-undef
  getCurrentUser: function getCurrentUser(user) {
    return firebase.auth().onAuthStateChanged(user);
  }
};
exports.model = model;