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