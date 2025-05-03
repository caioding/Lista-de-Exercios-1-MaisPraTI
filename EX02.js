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