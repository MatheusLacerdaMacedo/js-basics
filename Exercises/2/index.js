function max(numberA, numberB) {
    if (numberA > numberB) {
        return numberA;
    } else if (numberB > numberA) {
        return numberB;
    } else {
        return "The two numbers are equal";
    }
}

console.log(max(20,10))
console.log(max(30,10))

function maxi (a, b) {
    return (a >b) ? a : b;
}
console.log(maxi(2,6))