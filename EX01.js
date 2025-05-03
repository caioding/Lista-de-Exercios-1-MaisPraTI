// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let num = parseInt(prompt('Digite um número inteiro: '));

if (isNaN(num)) {
    console.log('Por favor, insira um número válido.');
}
else if (num % 2 === 0) {
    console.log(`${num} é par.`);
} 
else {
    console.log(`${num} é ímpar`);
}

// Caso de teste
// Digite um número inteiro: -4
// -4 é par