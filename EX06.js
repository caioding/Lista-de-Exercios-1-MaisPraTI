// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

let ladoA = Number(prompt('Digite o lado A: '));
let ladoB = Number(prompt('Digite o lado B: '));
let ladoC = Number(prompt('Digite o lado C: '));

if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    console.log('Por favor, insira números válidos.');
}
else if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.log('Os lados devem ser maiores que zero.');
}
else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    console.log('Os lados fornecidos não formam um triângulo.');
}
else {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log(`Equilatero. Possui todos os lados iguais. LadoA: ${ladoA}, LadoB: ${ladoB}, LadoC: ${ladoC}`);
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log(`Isósceles. Possui dois lados iguais. LadoA: ${ladoA}, LadoB: ${ladoB}, LadoC: ${ladoC}`);
    } else {
        console.log(`Escaleno. Possui todos os lados diferentes. LadoA: ${ladoA}, LadoB: ${ladoB}, LadoC: ${ladoC}`);5
    }
}

// Casos de teste:
// 1. Lado A: 3, Lado B: 3, Lado C: 3 (Equilátero) 
// 2. Lado A: 3, Lado B: 3, Lado C: 4 (Isósceles)
// 3. Lado A: 3, Lado B: 4, Lado C: 5 (Escaleno)
