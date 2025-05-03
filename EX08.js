// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let input1 = prompt("Digite o número 1: ");
let input2 = prompt("Digite o número 2: ");

if (input1.trim() === '' || input2.trim() === '') {
    console.log('Entrada vazia. Por favor, insira um número.');
    process.exit(1);
}

let n1 = Number(input1);
let n2 = Number(input2);

if (isNaN(n1) || isNaN(n2)) {
    console.log("Por favor, insira números válidos.");
    process.exit(1);
} else if (n1 === n2) {
    console.log("Os números devem ser diferentes.");
} else {
    if (n1 > n2) {
        let maior = n1;
        let menor = n2;
        console.log("\nPrimeiro numero é maior que o segundo.");
        console.log(`Ordem crescente: ${menor}, ${maior}`);
    } else {
        let maior = n2;
        let menor = n1;
        console.log("\nSegundo número é maior que o primeiro.");
        console.log(`Ordem crescente: ${menor}, ${maior}`);
    }
}

// Casos de teste:
// (-2) 3 - Ordem crescente: -2, 3
// 3 (-2) - Ordem crescente: -2, 3