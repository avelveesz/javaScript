//1//
let num1 = 1
while (num1 <= 20) {
console.log(num1)
num1++
}
console.log("----------------------------")
//2//
let resposta 
do {
    resposta = prompt ("deseja continuar?")
}while (resposta == "sim")
console.log("----------------------------")

// 3 - Sequência definida pelo usuário
// ===============================
let final = Number(prompt("Digite o número final da sequência:"));
let c3 = 1;

do {
    console.log(c3);
    c3++;
} while (c3 <= final);

console.log("-------------------");


// ===============================
// 4 - Contador com salto (1 a 31 pulando 2 em 2)
// ===============================
let c4 = 1;

do {
    console.log(c4);
    c4 += 2;
} while (c4 <= 31);

console.log("-------------------");


// ===============================
// 5 - Classificação numérica
// ===============================
let contador5 = 1;
let numero5;

do {
    numero5 = Number(prompt("Digite um número:"));

    if (numero5 > 0) {
        console.log("NÚMERO POSITIVO");
    } else if (numero5 < 0) {
        console.log("NÚMERO NEGATIVO");
    } else {
        console.log("O NÚMERO É ZERO");
    }

    contador5++;
} while (contador5 <= 5);

console.log("-------------------");


// ===============================
// 6 - Operações matemáticas
// ===============================
let resposta6;

do {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));

    console.log("Soma:", n1 + n2);

    resposta6 = prompt("Deseja fazer outra conta? (s/n)");

} while (resposta6 == "s");

console.log("Programa encerrado.");
console.log("-------------------");


// ===============================
// 7 - Repetição de mensagem
// ===============================
let c7 = 1;

do {
    console.log("Estudando JavaScript");
    c7++;
} while (c7 <= 10);

console.log("-------------------");


// ===============================
// 8 - Validação de número positivo
// ===============================
let numero8;

do {
    numero8 = Number(prompt("Digite um número positivo:"));
} while (numero8 <= 0);

console.log("Valor válido!");
console.log("-------------------");


// ===============================
// 9 - Controle de tentativas (senha)
// ===============================
let senha;

do {
    senha = prompt("Digite a senha:");
} while (senha != "senai2026");

console.log("Acesso liberado");
console.log("-------------------");


// ===============================
// 10 - Soma de números
// ===============================
let total = 0;
let numero10;
let continuar;

do {
    numero10 = Number(prompt("Digite um número inteiro:"));
    total += numero10;

    continuar = prompt("Deseja continuar? (s/n)");

} while (continuar == "s");

console.log("Total da soma:", total);


