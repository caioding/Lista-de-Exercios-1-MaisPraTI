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