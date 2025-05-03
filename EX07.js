// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let num = Number(prompt('Digite o número de maçãs compradas: '));

if (isNaN(num)) {
    console.log('Por favor, insira um número válido.');
}
else if (num <= 0) {
    console.log('Nenhuma maçã foi comprada.');
}
else if (num < 12) {
    result = num * 0.30;
    result = result.toFixed(2);
    console.log(`Total da compra: R$ ${result}`);
} else {
    result = num * 0.25;
    result = result.toFixed(2);
    console.log(`Total da compra: R$ ${result}`);
}

// Casos de teste:
// 11 - R$ 3.30
// 12 - R$ 3.00
// 0 - Nenhuma maçã foi comprada
// (-1) - Nenhuma maçã foi comprada
// ddfsd - Por favor, insira um número válido