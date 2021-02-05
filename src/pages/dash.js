import Menu from './menu.js';
// import mmm from '../styles/menu.css';
// import '../styles/menu.scss';
//const subcontainer_menu = document.querySelector('.subcontainer-menu');


export default () => {
const menu = Menu();

    let dash = document.createElement('div');
        dash.setAttribute('class', 'dashboard');
        let divTest = document.createElement('div');
            divTest.setAttribute('class','divTest');
        let divTest2 = document.createElement('div');
            divTest2.setAttribute('class','divTest');

        let divTest3 = document.createElement('div');
            divTest3.setAttribute('class','divTest');
        let btnCloseMenu = document.createElement('button');
            btnCloseMenu.setAttribute('class','menu__btn');
            btnCloseMenu.setAttribute('id','btnCloseMenu')
           
            
        let btnOpenMenu = document.createElement('button');
            // btnOpenMenu.setAttribute('class','menu__btn22');
            btnOpenMenu.setAttribute('id','btnOpenMenu');

            btnCloseMenu.addEventListener('click', ()=>{
                btnOpenMenu.classList.add('menu__btn22');
                // btnOpenMenu.classList.add('is__active')
                
            })
dash.appendChild(menu);
// divs de prueba
dash.appendChild(divTest);
dash.appendChild(divTest2);
dash.appendChild(divTest3);
// botoenes de prueba
dash.appendChild(btnCloseMenu);
dash.appendChild(btnOpenMenu);




return dash
};