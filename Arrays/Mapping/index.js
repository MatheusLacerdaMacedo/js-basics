const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const itens = filtered.map(n => '<li>' + n + '</li>');


const html = '<ul>' + itens.join('') + '</ul>';

console.log(html)




