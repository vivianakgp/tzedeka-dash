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
            default:
        }
    },
    logInAuth:(userData)=>{
        return model.logInAuth(userData)
        .then(()=>{
            // location.hash='#/register'; 
            controller.templateChange('#/register');
        });
    },

};