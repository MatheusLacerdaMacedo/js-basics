const numbers = [1, 2, 3, 4];
let existe = false;
const valor = 6

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === valor) {
        existe = true;
        break;
    }
}

console.log(existe)