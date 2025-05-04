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

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')();

let idade = parseInt(prompt('Digite sua idade: '));

if (isNaN(idade)) {
    console.log('Por favor, insira um número válido.');
}
else if (idade < 0) {
    console.log('Idade inválida.');
}
else if (idade < 1 && idade >= 0) {
    console.log('Acabou de nascer');
}
else if (idade < 12 && idade >= 1) {
    console.log('Criança');
}
else if (idade >= 12 && idade < 18) {
    console.log('Adolescente');
}
else if (idade >= 18 && idade < 60) {
    console.log('Adulto');
}
else {
    console.log('Idoso');
}

// Caso de teste
// Digite sua idade: 11
// Criança

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

let nota = parseFloat(prompt('Digite sua nota: '));
if (isNaN(nota)) {
    console.log('Por favor, insira um número válido.');
    process.exit(1);
}
else if (nota < 0 || nota > 10) {
    console.log('Nota inválida.');
}
else if (nota >= 7) {
    console.log('Aprovado');
} 
else if (nota >= 5) {
    console.log('Recuperação');
} 
else {
    console.log('Reprovado');
}

// Caso de teste
// Digite sua nota: 8.5
// Aprovado

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

let loop = true;

while (loop === true) {
    let option = prompt('Escolha uma opção (1, 2, 3): ');
    switch (option) {
        case '1':
            console.log('Opção 1 selecionada.');
            break;
        case '2':
            console.log('Opção 2 selecionada.');
            break;
        case '3':
            console.log('Opção 3 selecionada.');
            break;
        default:
            console.log('Opção inválida.');
            loop = false;
    }
}

// Caso de teste
// Escolha uma opção (1, 2, 3): 2
// Opção 2 selecionada.

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

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

for ( i = 10; i >= 1; --i) {
    console.log("A bomba vai explodir em: " + i);
}
console.log("BOOM! A bomba explodiu!"); 

// Output
// A bomba vai explodir em:  10
// A bomba vai explodir em:  9
// A bomba vai explodir em:  8
// A bomba vai explodir em:  7
// A bomba vai explodir em:  6
// A bomba vai explodir em:  5
// A bomba vai explodir em:  4
// A bomba vai explodir em:  3
// A bomba vai explodir em:  2
// A bomba vai explodir em:  1
// BOOM! A bomba explodiu!

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

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let num = 1;
let sum = 0;
let count = 0;

while (num !== 0) {
    num = parseFloat(prompt('Digite um número decimal (0 para sair): '));
    if(isNaN(num)) {
        console.log('Por favor, insira um número decimal válido.');
        continue;
    }
    if (num !== 0) {
        sum += num;
        count++;
    }
}
if (count > 0) {
    let media = sum / count;
    media = media.toFixed(2); 
    console.log(`Média aritmética: ${media}`);
}

// Casos de teste
// Digite um número decimal (0 para sair): 3.5
// Digite um número decimal (0 para sair): 4.5
// Digite um número decimal (0 para sair): 2.0
// Digite um número decimal (0 para sair): 1.6
// Digite um número decimal (0 para sair): 3.4
// Digite um número decimal (0 para sair): 0
// Média aritmética: 3.00

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
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

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

console.log('Primeiros 10 números da sequência de Fibonacci!');

let fibonacci = [];

for (let i = 0, a = 0, b = 1; i < 10; i++) {
    fibonacci.push(a);
    let temp = a;
    a = b;
    b = temp + b;
}

console.log(fibonacci.join(', '));

// Output 
// Primeiros 10 números da sequência de Fibonacci!
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34