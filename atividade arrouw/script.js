//1 - Dobro
let dobro = (numero) => numero * 2

let numeroDobro = Number(prompt("Digite um número para ver o dobro:"))
console.log("Dobro", (numeroDobro))


//2 - Soma
let somar = (num1, num2) => num1 + num2

let numero1 = Number(prompt("Digite o primeiro número"))
let numero2 = Number(prompt("Digite o segundo número"))

console.log("Resultado da soma:", (numero1, numero2))


//3 - Quadrado
let quadrado = (numero) => numero * numero

let numquadrado = Number(prompt("Digite um número para ver o quadrado:"))
console.log("Quadrado", (numquadrado))


//4 - Sucessor
let sucessor = (numero) => numero + 1

let numprox = Number(prompt("Digite um número para ver o sucessor:"))
console.log("Sucessor", (numprox))

/* 5 */
let maiorNumero = (numero2, numero3) => {
    if(numero2 >  numero3){
        return "O primeiro número é maior"
    } else {
        return "O segundo número é maior"
    }
}
let nu = Number(prompt("5- Informe o primeiro número"))
let numero3 = Number(prompt("Informe o segundo número"))
console.log(maiorNumero(nu, numero3))


/* 6 */
let parOuImpar = (num) =>{
    let aux = num % 2
    if (aux == 0) { // num % 2 == 0
        return "Par"
    } else{
        return "Ímpar"
    }
}
let num = Number(prompt("6- Qual o número?"))
console.log(parOuImpar(num))

console.log("-------------------------")
console.log("7-")
/* 7 */
let verificarNumero = (numero) => {
    if(numero <  0){
        return "Negativo"
    }else if (numero >  0){
        return "Positivo"
    } else {
        return "Zero"
    }
}
let numero = Number(prompt("7- Qual o número?"))
console.log(verificarNumero(numero))

console.log("-------------------------")
console.log("8-")
/* 8 */
let media  = (num2, num3, num4) =>{
    let med = (num2 + num3 + num4) / 3 
        return med
}
let num2 = Number(prompt("8- Informe a primeira nota"))
let num3 = Number(prompt("Informe a segunda nota"))
let num4 = Number(prompt("Informe a terceira nota"))
console.log(media (num2, num3,num4))

console.log("-------------------------")
console.log("9-")
/* 9 */
let calcularDesconto = (precoProduto) =>{
    let calculoDesconto = precoProduto -(precoProduto * 0.2)
        return calculoDesconto
}
let precoProduto = Number(prompt("9- Informe o preço do produto"))
console.log(calcularDesconto(precoProduto))

console.log("-------------------------")
console.log("10-")
/* 10 */
let verificarAprovacao = (nota1, nota2) => {
    let media = (nota1 + nota2) / 2
    if(media <=  7){
        return "Aprovado"
    }else if (media >= 5 && media < 7){
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
let nota1 = Number(prompt("10- Informe a primeira nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
console.log(verificarAprovacao(nota1, nota2))




