//estrutura condicional 

let nota = 7
if(nota >= 7) {
    console.log("aprovado")
} else {
    console.log("reprovado")
}
console.log("---------------------------")
let idade = Number(prompt("qual é sua idade?"))
if (idade >= 18) {
    console.log ("pode tirarar a habilitacao")
} else{
    console.log("idade insuficiente")
}
console.log("---------------------------")
let salario = Number(prompt("qual é sua idade"))
let anos = Number (prompt ("Voce trabalha na empresa a quantos anos?") )

if(salario <= 3000 && anos >= 2) {
//e = tudo tem que ser verdade
console.log("Você terá um aumento")
}else {
console.log("Ainda não")
}
console.log("---------------------------")
let chuva = false 
if (chuva) {
    console.log("leva o guarda-chuva")
}else{
    console.log("nao precisa levar guarda-chuva")
}
console.log("---------------------------")
/*peça dois numeros p o usuario e veja 
se o primeiro é menor q o segundo, se sim,
mostre"o 1 é menor", senao, mostre "o sengundo é o menor ou sao iguais"*/
let numero = Number(prompt("informe um numero"))
let numero2 = Number(prompt("informe um numero"))
if(numero < numero2) {
    console.log("o primeiro é menor")
} else {
    console.log("o segundo é o menor ou sao iguais")
}
console.log("---------------------------")
/* peça um numero p o usuario e diga se o numero pe impar ou par */
let numero3 = Number(prompt("informe um numero"))
let aux = numero3 % 2
if (aux == 0) {
}else {
    console.log("é impar")
 }
/* Uma loja da descontos para clientes com base no valor
da compra, peca o valor da compra, se ele for maior ou
igual a R$250, de R$50 de desconto, e mostre o novo
valor que sera pago, senao, mostre apenas "sem desconto"*/
let valor = Number(prompt("informe o total da compra"))
if(valor >= 250) {
    let aux2 = valor -50
    console.log("voce ira pagar: ", aux2)
} else {
    console.log("sem desconto")
}
