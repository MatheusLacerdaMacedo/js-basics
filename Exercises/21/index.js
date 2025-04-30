const numbers = [1,2,3,4];

const output = except(numbers, [4])

console.log(output);

function except(array, excluded) {
const result = []

    for (let i = 0; i <= numbers.length; i++) {
        if(!excluded.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

