function sum() {
    let total = 0;

    for (let value of arguments) {
        if (Array.isArray(value)) {
            for (let element of value) {
                total += element;
            }
        } else {
            total += value;
        }
    }
    return total;
}

console.log(sum(1,2,3, [4,5],10))