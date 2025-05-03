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