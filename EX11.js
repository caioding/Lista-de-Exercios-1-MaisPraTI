// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();

let soma = 0;
let i = 0;
for (i; i < 5; i++) {
    let input = prompt('Digite um número: ');
    if (input.trim() === '') {
        console.log('Entrada vazia. Por favor, insira um número.');
        break;
    }
    let num = Number(input);
    if (isNaN(num)) {
        console.log('Por favor, insira números válidos.');
        break;
    } else {
        soma += num;
    }
}
if (i === 5) {
    console.log(`Soma total: ${soma}`);
}

// Casos de teste
// 1. Entrada: 1, 2, 3, 4, 5 -> Saída: Soma total: 15
// 2. Entrada: 10, 20, 0, -5, 5 -> Saída: Soma total: 30