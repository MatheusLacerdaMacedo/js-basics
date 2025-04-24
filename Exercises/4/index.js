
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => number it self
//NaN => 'Not a number'

const output = fizzBuzz(1);
console.log(output);

function fizzBuzz(input) {

    if (input === NaN) {
        console.log("Not a Number")
    }
    else if (input % 3 == 0 && input % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (input % 5 == 0) {
        console.log("Buzz")
    }
    else if (input % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(input)
    }

}