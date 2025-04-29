let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')
let address3 = new Address('x', 'y', 'z');


function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    if (address1 === address2) return true;

    if (typeof address1 !== 'object' || address1 === null ||
        typeof address2 !== 'object' || address2 === null) {
        return false;
    }

    return address1.street === address2.street &&
           address1.city === address2.city &&
           address1.zipCode === address2.zipCode;
}

console.log(areEqual(address1, address2)); // true
console.log(areEqual(address1, address3)); // false