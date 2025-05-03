// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

const num = (prompt('Digite um número entre 1 e 10 para mostrar a tabuada: '));

if (isNaN(num) || num < 1 || num > 10) {
    console.log('Número inválido! Por favor, digite um número entre 1 e 10.');
    process.exit(1);
}
else {
    console.log(`Tabuada do ${num}:`);
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

// Casos de teste
// 1. Entrada: 6 -> Saída: 
// Tabuada do 6:
// 6 X 1 = 6
// 6 X 2 = 12
// 6 X 3 = 18
// 6 X 4 = 24
// 6 X 5 = 30
// 6 X 6 = 36
// 6 X 7 = 42
// 6 X 8 = 48
// 6 X 9 = 54
// 6 X 10 = 60