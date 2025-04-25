function somarMultiplos(limite) {
    let soma = 0;

    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }

    console.log("Soma dos múltiplos de 3 ou 5 até " + limite + " é: " + soma);
}

// Exemplo de uso
somarMultiplos(10); // Vai somar 3 + 5 + 6 + 9 + 10 = 33
