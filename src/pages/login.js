export default ()=> {
    const login = document.createElement('div');
                login.setAttribute('class','login');
    // *** component formLogin ***                       
    const formLogin = document.createElement('div');
        formLogin.setAttribute('class','formLogin');
         // childs      
        const div = document.createElement('div');
            div.setAttribute('class','formLogin__div--grey');
        const h1 = document.createElement('h1');
            h1.innerHTML = 'Espacio para clientes';
            h1.setAttribute('class','formLogin__h1');
        const inputId = document.createElement('input');
            inputId.setAttribute('class','formLogin__input--id');
            inputId.setAttribute('placeholder','ID Cliente');
        const inputPassword = document.createElement('input');
            inputPassword.setAttribute('class','formLogin__input--pass');
            inputPassword.setAttribute('placeholder','Contraseña');
        const btn =  document.createElement('button');
            btn.setAttribute('class','formLogin__btn');
            btn.setAttribute('value','Ingresar');
            btn.innerHTML = 'Ingresar';
        const paragraph = document.createElement('p');
            paragraph .setAttribute('class','formLogin__paragraph');
            paragraph.innerHTML = '¿No has trabajado con nosotros?';
        const anchor = document.createElement('a');
                anchor.innerHTML=' Empieza hoy';
                anchor.setAttribute('href','#/');
                anchor.setAttribute('class','formLogin__anchor')

    // *** img Login ***        
    const imgLogin = document.createElement("div"); 
                imgLogin.setAttribute('class','imgLogin');
                // childs
                const img = document.createElement('img');
                    img.setAttribute('src','../styles/assets/img-dashboard-login.png');
                    img.setAttribute('class','imgLogin__img');
    //iniciamos a anidar los elementos 
    login.appendChild(formLogin);
            formLogin.appendChild(div);
            formLogin.appendChild(h1);
            formLogin.appendChild(inputId);
            formLogin.appendChild(inputPassword);
            formLogin.appendChild(btn);
            formLogin.appendChild(paragraph);
            paragraph.appendChild(anchor);
            imgLogin.appendChild(img);
    





    login.appendChild(imgLogin);
    return login
};
// btn.setAttribute('type','submit');
                // btn.setAttribute('value','ingresar');
                // btn.setAttribute('id','ingresar');
               