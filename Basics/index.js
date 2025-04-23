// This is my first JavaScript code!
let name = 'Matheus'; //String Literal
console.log(name);

//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive

let firstName = "Matheus";
//let lastName = "Lacerda";

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let middleName = undefined;
let selectedColor = null;

let person = {
    name: 'Matheus',
    age: 21
};
//Dot Notation
person.name = "Jhon";

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

let selectedColors = ['red', 'blue']; //[] Array Literal
selectedColors[2] = '1';
console.log(selectedColors.length);

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Matheus','Smith');

//Calculates a value
function square (number) {
    return number * number;
}

let number = square(2);
console.log(number);