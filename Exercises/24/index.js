function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max; 
}

const numbers = [1, 2, 3, 4];
const max = getMax(numbers);

console.log(max); 
