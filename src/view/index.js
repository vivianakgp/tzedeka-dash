import { controller } from '../controller/controller.js';
// importo todas las vistas
import Login from '../pages/login.js';
import Registry from'../pages/registry.js';
import Dash from '../pages/dash.js';
// exporto mi objeto views y vista / es inportado en controller.
export { views , vista };

// creo un objeto con propiedades que contienen una pagina/funcion ocea que son metodos del objeto views
    const views = {
    login: Login,
    registry: Registry,
    dash: Dash
};
//creo un objeto llamado vista este mandara la informacion de las interfaces al controller.
const vista = {
    logIn: () => {
        const formLogin = document.getElementById('formLogin');
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const userData = {
                email: formLogin.email.value,
                password: formLogin.password.value
            }
            formLogin.reset();
            return controller.logInAuth(userData)
           
        });
    },
}


