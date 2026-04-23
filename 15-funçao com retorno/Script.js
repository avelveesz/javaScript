function soma () {
    let num1 = 2
    let num2 = 5
    let somar = num1 + num2
    console.log(somar)
}

soma()
console.log("----------")

// com parametro
function soma2(num3, num4) {
    let somar2 = num3 + num4
    console.log(somar2)
}

let num3 = 2
let num4 = 5
soma2(num3, num4)

console.log("----------")

// com retorno
function soma3(num5, num6) {
    let somar3 = num5 + num6
    return somar3
}

let num5 = 2
let num6 = 5
let resultado = soma3(num5, num6)
console.log(resultado)


///Dobro
function dobro(numero) {
let aux = dobro * 2
return "o dobro é ", aux//console.log(aux)
}
let numero = Number(prompt("Escolha um numero") )
let mostrar = dobro(numero)
console. log(mostrar)

//situacao do aluno//

function aprovacao(nota1, nota2) {
let media = (nota1 + nota2) / 2
if(media >= 7) {
return "Aprovado" 
} else {
return "Reprovado"

}

}
let nota1 = Number(prompt("Qual a 1 nota"))
let nota2 = Number(prompt("Qual a 2 nota"))
let situacao = aprovacao(nota1, nota2)
console. log(situacao)

//Maior numero
function maior(n1, n2) {
if(n1 > n2) {
return n1 , "e maior que", n2
} else if (n2 > n1) {
return n2 , "é maior que", n1
} else {
return "São iguais"

L

}

5
0

}

let n1 = Number(prompt ("Informe o 1º numero") )
let n2 = Number (prompt("Informe o 2º numero") )
let auxiliar = maior(n1,n2)
console. log(auxiliar)

//Peça um número para o usuário e mostre o triplo dele
function triplo(num) {
let valor = num * 3
return valor
}
let num = Number(prompt("Digite um numero") )
let aux1 = triplo(num)
console. log(aux1)

//Uma escola faz uma competição de 
// quem consegue pensar na maior palavra já criada. Faça 
// uma função que pede uma palavra para o usuário, 
// conte quantas letras ela tem, se tiver mais de 10,
//  diga "uau", senao, diga "tem palavras maiores"//
function contar(palavra) {
if(palavra.length > 10) {
return "uau"
} else {
return "tem palavras maiores"

}

}

let palavra = prompt("Diga uma palavra")
let letras = contar(palavra)
console. log(letras)



//revisao//

function saudacao (nome){
    return "bom dia" + nome
}
let nome = prompt ("qual seu nome?")
let aux = saudacao(nome)
console.log(aux)



function soma(numero1,numero2) {
    let resultado = numero1 + numero2
    return resultado
}
let numero1 = Number(prompt("primeiro numero"))
let numero2 = Number(prompt("segundo numero"))
function soma(numero1,numero2){
   let resultado = n1 + n2
return resultado
// return n1 + n2 //assim também funciona

}
// let auxiliar = soma(n1,n2)
// console.log(auxiliar)
// console.log(soma(n1,n2))

// Classificação de temperatura

function previsaodotempo (temperatura){
    if(temperatura > 30){
        return "calor"
    } else if (temperatura < 12){
        return "frio"
    }else{
        return "ok"
    }
}
let temperatura=Number(prompt("qual a temperatura?"))
let previsao = previsao = previsaodotempo (temperatura)
console.log(previsao)

/*pergunta um salario para o funcionario, se for menor q 2500
de 500 reais de aumento e mostre o novo salario, senoa, mostre,
"sem aumento"*/
function salario (aumento){
    if (aumento > 2500){
     let aumento = salario + 500
return aumento
        return "SEM AUMENTO"
    }
}
let salario = Number (prompt("qual o salario"))
console.log(salario(salario))

/*peça um numero para o usuario, e mostre uma 
porcentagem dele, se o numero for menor ou igual a 100,
mostre 10% do valor, se for menor ou igual a 1000, mostre 35%
do valor, senao, mostre"sem porcentagem  */
function porcentagem(valor) {
if (valor <= 100) {
return valor * 0.1
} else if (valor <= 1000) {
return valor * 0.35
} else {
return "sem porcentagem"
}
}
let valor = Number(prompt("Qual o valor?"))
console. log(porcentagem(valor))


