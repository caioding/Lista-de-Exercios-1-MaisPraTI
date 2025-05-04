// 14.Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número para calcular o fatorial: '));
let fatorial = 1;
if (isNaN(numero) || numero < 0) {
    console.log('Por favor, insira um número válido.');
    process.exit(1);
}
else {
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`Fatorial de ${numero}: ${fatorial}`);
}

// Caso de teste
// Digite um número para calcular o fatorial: 5
// Fatorial de 5: 120