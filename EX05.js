// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

let peso = Number(prompt('Digite seu peso: '));
let altura = Number(prompt('Digite sua altura: '));

if (isNaN(peso) || isNaN(altura)) {
    console.log('Por favor, insira números válidos.');
}
else if (peso <= 0 || altura <= 0) {
    console.log('Peso e altura devem ser maiores que zero.');
}
else {
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        console.log('Baixo peso');
    } else if (imc >= 18.5 && imc < 25) {
        console.log('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        console.log('Sobrepeso');
    } else {
        console.log('Obesidade');
    }
}

// Caso de teste
// Digite seu peso: 70
// Digite sua altura: 1.80
// Peso normal