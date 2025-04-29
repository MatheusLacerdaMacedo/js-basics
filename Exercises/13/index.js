// street
// city
// zipcode
// showAddress(address)

const address = {
    street: 'Avenida acesso, bloco 4 ',
    city: 'Belo Horizonte',
    zipcode: '30380-479'
};

function showAddress (address) {
    for (let key in address)
        console.log(key, address[key])
}
showAddress(address)