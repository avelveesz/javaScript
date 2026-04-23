// estrutura condicional encadeada 

let nota = 6
if (nota >= 7) {
console. log("Aprovado")
} else if (nota >= 5) {
console.log("Recuperação")
} else {
console.log("Reprovado")
}
console.log("-------------------------------")
let idade = Number (prompt("Qual sua idade?"))
if (idade >= 0 && idade <= 12) {
console.log("Criança")
} else if (idade >12 && idade <= 17) {
console. log("Adolescente")
} else if (idade > 17 && idade <= 55) {
console.log("Adulto")
} else if (idade > 55 && idade <= 100){
console.log("Idoso")
} else {
console.log("Idade inválida")
}
console.log ("_-----------------------")
/* Em uma passeio escolar, os alunos são separados por
categoria, peça a categoria do aluno e:
- Se for categoria "A", diga "Ala leste"
- Se for categoria "B", diga "Ala oeste"
- Se for categoria "C", diga "Ala Sul"
- Se for categoria "D", diga "Ala Oeste"
Para qualquer outra, diga "Categoria Invalida"*/

let categoria =(prompt("qual sua categoria?"))
if (categoria == "a") {
console.log("Ala leste")
} else if (categoria == "b") {
console. log("Ala oeste")
} else if (categoria == "c") {
console.log("Ala Sul")
} else if (categoria == "d"){
console.log("Ala Oeste")
} else {
console.log("Categoria Invalida")
}
console.log("----------------------")
/* Peça dois números para o usuário e verifique se
- o primeiro é maior que o segundo
- o segundo é maior que o primeiro
- se eles são iguais */
let numero = (prompt("informe um numero"))
let numero2 = (prompt("informe um numero"))
if(numero1 > numero2) {
console.log("O primeiro é maior que o segundo")
} else if (numero2 > numero1 ) {
console.log("O segundo é maior que o primeiro")
} else {
console.log("Eles sao igual")
}
