const person = {
    name: 'Matheus',
    age: 21,
    sex: 'M'
};

showProperties(person)

function showProperties(obj) {
    for (let key in person) {
        if (typeof person[key] === 'string') {
            console.log(key + ': ' + person[key]);
        }
    }

}