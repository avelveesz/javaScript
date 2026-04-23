let num1 = 1
while (num1 <= 5) {
console.log(num1)
num1++

}

let num2 = 1
do {
console.log(num2)
num2++
}while (num2 <= 5)
console.log("-------------------")
let resposta 
do {
    resposta = prompt ("deseja continuar?")
}while (resposta == "sim")
    console.log("----------------")
    let soma = 0
let num
let contador = 1
do {
num = Number(prompt("Digite um numero: ") )
soma = soma + num
console.log(soma)
contador++
} while (contador <= 3)
    console.log ("resultado final: ", soma)
console. log("-------------------------")
let usuario
let senha
do {
usuario = prompt("Qual o usuario?")
senha = prompt ("Qual a senha?")
} while (usuario != "admin" || senha != "senha")
    console. log("-------------------------")
    /*mostre os numeros de 1 a 9 pulando de 2 em 2 */
let cont = 1
do{
    console.log(cont)
    cont += 2
} while (cont <= 99)
    console.log("----------------")
    /* Uma pessoa é selecionada em um grupo dependendo da
escola que estudou, pergunte para o usuário a escola até
que ele responda "Senai" */
let escola
do {
escola = prompt("Em qual escola você estudou?")
} while (escola != "Senai")
console.log("voce é senaiano")