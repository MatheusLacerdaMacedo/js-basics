
const truthyFalsy = [0, null, undefined, 3]

function counTruthy(array) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i]) {
            console.log(array[i] + ' Truthy')
        }

    }
}
counTruthy(truthyFalsy)

