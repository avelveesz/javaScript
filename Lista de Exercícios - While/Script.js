//1//
let x = 1
while (x <= 10) {
    console.log(x)
    x++
}
console.log("----------------------------")
//2//
//peca tres numeros e mostre a multiplicacao deles
let numero = Number(prompt("Informe um número para ver a tabuada:"))
let contador = 1

while (contador <= 10) {
    console.log (numero * contador)
    contador++
}
console.log("----------------------------")
 //3//
let a = 1
while (a >= 10) {
    console.log(a)
    a++
}
console.log("----------------------------")
//4//
let senha2 = prompt ("Qual a senha?")
while ( senha2 != "12345") {


senha2 = prompt("Qual a senha?")

console.log("Pode acessar")
}
console.log("----------------------------")
//5//
let b = 50
while (b <= 100) {
    console.log(b)
    b++
}
console.log("----------------------------")
//6//
let c = 0

while (c <= 100) {
    console.log(c)
    c += 5
}
console.log("----------------------------")
//7//
let contador1 = 1;

while (contador <= 5) {
    console.log("Eu gosto de JavaScript");
    contador1++;
}
console.log("----------------------------")
//8//
let nome = prompt("Qual seu nome?");
let quantidade = Number(prompt("Quantas vezes seu nome vai aparecer?"));

let contador2 = 1;

while (contador2 <= quantidade) {
    console.log(nome);
    contador2++;
}
console.log("----------------------------")
//9//
let nota = Number(prompt("Digite uma nota entre 0 e 10:"));

while (nota < 0 || nota > 10) {
    nota = Number(prompt("Valor inválido! Digite uma nota entre 0 e 10:"));
}

console.log("Nota registrada com sucesso");
console.log("----------------------------")
//10//
let numero1 = Number(prompt("Digite um número:"));
let soma = 0;

while (numero1 >= 0) {
    soma = soma + numero;
    numero1 = Number(prompt("Digite outro número (negativo para parar):"));
}

console.log("A soma é:", soma);
console.log("----------------------------") 
//11//
let opcao = 0;

while (opcao != 3) {
    opcao = Number(prompt(
        "1 - Cadastrar\n2 - Consultar\n3 - Sair"
    ));
}

console.log("Programa encerrado");
console.log("----------------------------") 
//12//
let numero3 = 1;

while (numero3 <= 50) {
    if (numero3 % 2 == 0) {
        console.log(numero3);
    }
    numero3++;
}
console.log("----------------------------") 
//13//
let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

while (usuario != "admin" || senha != "123") {
    usuario = prompt("Usuário incorreto. Digite novamente:");
    senha = prompt("Senha incorreta. Digite novamente:");
}

console.log("Bem-vindo ao sistema!");
console.log("----------------------------") 
//14//
let numeroSecreto = 7;
let tentativa = Number(prompt("Tente adivinhar o número:"));

while (tentativa != numeroSecreto) {
    tentativa = Number(prompt("Errou! Tente novamente:"));
}

console.log("Você acertou!");