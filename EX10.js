// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

let num = parseInt(prompt('Digite um número inteiro: '));

if (Number.isInteger(num)) {
    for (let i = 0; i < 10; i++) {
        console.log(num);
    }
}
else {
    console.log('Por favor, insira um número inteiro válido.');
}

// Casos de teste:
// 5 -> 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
// (-2) -> - -2, -2, -2, -2, -2, -2, -2, -2, -2, -2