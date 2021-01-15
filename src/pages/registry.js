export default () => {
    const divRegistry = document.createElement('div');
        divRegistry.setAttribute('class','divRegistry');

        const customerName = document.createElement('input');
            customerName.setAttribute('class','divRegistry__customerName');
            customerName.setAttribute('placehorder','Nombre');


        const customerCell = document.createElement('input');
            customerCell.setAttribute('class','divRegistry__customerCell');
            customerCell.setAttribute('placehorder','Telefono');

        
        const customerID = document.createElement('input');
            customerID.setAttribute('class','divRegistry__customerId');
            customerID.setAttribute('placehorder','ID Cliente');

        const btnRegister = document.createElement('button');
            btnRegister.setAttribute('class','divRegistry__btnRegister');
            btnRegister.setAttribute('value','Registrar');




    

        divRegistry.appendChild(customerName);
        divRegistry.appendChild(customerCell);
        divRegistry.appendChild(customerID);
        divRegistry.appendChild(btnRegister);


    return divRegistry
}