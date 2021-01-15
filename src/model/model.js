// import { controller } from './controller/controller.js';

// creo un objeto llamado modelo que se encargara de hacer las llamadas a la api de firebase
// recive informacion del objeto contolador
// retornara respuestas al controlador
//exporto mi objeto model/ importado en el contoller

export const model = {
    logInAuth:( userData) => {
        return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
    },
}