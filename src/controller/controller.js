import {views } from '../view/index.js';
// creamos un objeto que controla todas las vistas 
// nuestro objeto se llama contoller y tiene una propiedad que contiene una funcion(metodo)
export const controller = {
    templateChange: (hash)=>{
        // hash es pasado como parametro enviado desde la funcion initial con window.location.hash
        const mainSection = document.getElementById('container');
        mainSection.innerHTML = ' ';
        switch (hash){
            case '':
                mainSection.appendChild(views.login());
                break;
            default:
        }
    }

}