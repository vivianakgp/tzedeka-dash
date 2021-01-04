import { controller } from './controller/controller.js';
const initial = () =>{
    // console.log('esta es la primer funcion(initial) que extrae el location.hash y lo envia al controlador');
    const hash = window.location.hash
    console.log(hash)

    controller.templateChange(hash);
    
    
};
window.addEventListener('load', initial );

