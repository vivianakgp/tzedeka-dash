export default {
  // logInAuth: AUTENTIFICAR USUARIIO
  userAuth(userData) {
    // eslint-disable-next-line no-undef
    return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
  },
  // ** establecer un observador en el objeto Auth **//
  // eslint-disable-next-line no-undef
  getCurrentUser: (user) => firebase.auth().onAuthStateChanged(user),
};
