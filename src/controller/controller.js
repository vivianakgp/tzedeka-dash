import {views , vista } from '../view/index.js';
import { model } from '../model/model.js';
// creamos un objeto que controla las vistas las ejecuta segun el tipo de hash en el navegador.
// controla la informacion que pasa de la vista al modelo y viceversa
// nuestro objeto se llama contoller y tiene una propiedad que contiene una funcion(metodo)
// exporto el objeto cotroller/ es importado en main.js, model y vista.
export const controller = {
    templateChange: (hash)=>{
        // hash es pasado como parametro enviado desde la funcion initial con window.location.hash
        const mainSection = document.getElementById('container');
        mainSection.innerHTML = ' ';
        switch (hash){
            case '':
                mainSection.appendChild(views.login());
                vista.logIn();
                break;
            case '#/register':
                mainSection.appendChild(views.registry());
            case '#/dashboard':
                mainSection.appendChild(views.dash());
            default:
        }
    },
    logInAuth:(userData)=>{
        return model.logInAuth(userData)
        .then(()=>{
            // location.hash='#/register';
            console.log('obten el id del usuario')
            controller.getCurrentUser()
            // controller.templateChange('#/register');
        })
        .catch((error)=>{
            var errorCode = error.errorCode;
            var errorMessage = error.message;
            if(errorCode === 'auth/wrong-password'){
                alert('Wrong password.')
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    },
    getCurrentUser: () => {
        model.getCurrentUser((user) => {
            if(user){
                console.log('El usuario ha iniciado la sesión.' + ' ' + user)
            } else {
                console.log('Ningún usuario está registrado')
            }
        })
    },

};