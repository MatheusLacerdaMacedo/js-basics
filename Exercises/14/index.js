const address = {
    street: 'Avenida acesso, bloco 4 ',
    city: 'Belo Horizonte',
    zipcode: '30380-479'
};


// Constructor Function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode
}

// Factory Function
function address1(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    }

}


// Calling Functions
const newAddress = new Address('Avenida acesso, bloco 4','Belo Horizonte','30380-479')
console.log(newAddress)

const addressNew = address1('Avenida acesso, bloco 4','Belo Horizonte','30380-479')
console.log(addressNew)