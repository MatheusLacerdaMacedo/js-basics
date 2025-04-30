const numbers = [1,2,3,4];

const count = countOccurences (numbers, 1);
console.log(count);


function countOccurences(array, searchElement) {
    let occurences = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            occurences++;
        }
    }
    return occurences;
}