// 1 //
function dobro(num) {
    let valor = num * 2
    return valor
}

let num = Number(prompt("1 - Digite um numero"))
let aux1 = dobro(num)

console.log(aux1)


// 2 //
function somar(num1, num2) {
    let aux2 = num1 + num2
    return aux2
}

let num1 = Number(prompt("2 - Digite um número"))
let num2 = Number(prompt("2 - Digite um número"))

let resultado = somar(num1, num2)

console.log(resultado)


// 3 //
function areaQuadrado(lado1, lado2) {
    let area = lado1 * lado2
    return area
}

let lado1 = Number(prompt("3 - Digite o valor do primeiro lado"))
let lado2 = Number(prompt("3 - Digite o valor do segundo lado"))

let resultado1 = areaQuadrado(lado1, lado2)

console.log(resultado1)




// 4 //


function antecessor(numero){
    let valor = numero - 1
    return valor
}

let numero = Number(prompt("4 - Digite um número"))
let resultado4 = antecessor(numero)
console.log(resultado4)


// 5  //
function tamanhoTexto(texto){
    let tamanho = texto.length
    return tamanho
}

let texto = prompt("5 - Digite um texto")
let resultado5 = tamanhoTexto(texto)
console.log(resultado5)


// 6  //
function maiorNumero(n1, n2){
    if(n1 > n2){
        return n1
    } else {
        return n2
    }
}

let n1 = Number(prompt("6 - Digite o primeiro número"))
let n2 = Number(prompt("6 - Digite o segundo número"))
let resultado6 = maiorNumero(n1, n2)
console.log(resultado6)


// 7  // 
function verificarIdade(idade){
    if(idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

let idade = Number(prompt("7 - Digite sua idade"))
let resultado7 = verificarIdade(idade)
console.log(resultado7)


// 8   //
function parOuImpar(numero8){
    if(numero8 % 2 == 0){
        return "Par"
    } else {
        return "Ímpar"
    }
}

let numero8 = Number(prompt("8 - Digite um número"))
let resultado8 = parOuImpar(numero8)
console.log(resultado8)


// 9 //
function media(a, b, c){
    let mediaFinal = (a + b + c) / 3
    return mediaFinal
}

let a = Number(prompt("9 - Digite a primeira nota"))
let b = Number(prompt("9 - Digite a segunda nota"))
let c = Number(prompt("9 - Digite a terceira nota"))
let resultado9 = media(a, b, c)
console.log(resultado9)


// 10 //
function calcularDesconto(preco){
    let desconto = preco * 0.10
    let valorFinal = preco - desconto
    return valorFinal
}

let preco = Number(prompt("10 - Digite o preço do produto"))
let resultado10 = calcularDesconto(preco)
console.log(resultado10)
