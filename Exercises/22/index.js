function move(array, index, offset) {
    const position = index + offset;

    // Verifica se a nova posição é válida
    if (position < 0 || position >= array.length) {
        console.error("Movimento inválido.");
        return;
    }

    const output = [...array]; // Faz uma cópia do array original
    const element = output.splice(index, 1)[0]; // Remove o elemento original
    output.splice(position, 0, element); // Insere na nova posição

    return output;
}

const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 0);
console.log(output); // [1, 2, 3, 4]
