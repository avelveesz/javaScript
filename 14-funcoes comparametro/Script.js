// funcoes com parametro

//declarativa
function saudacao(){
    let nome = prompt ("qual o seu nome?")
    console.log("bom dia", nome)
}
saudacao() // chamando a funcao


//declarativa com parametro
let nome2 = prompt ("qual seu nome?")
function saudacao2(nome2) {
}
saudacao2(nome2)

// somar 2 numeros
function soma(num1, num2){
    let soma = num1 + num2
    console.log("a soma é", soma)
}
let num1 = Number (prompt("informe um numero"))
let num2 = Number (prompt("informe o segundo numero"))
soma (num1, num2)


function maioridade(idade) {
if(idade >= 18) {
console.log("Maior de idade")
} else {
console.log("Menor de idade")

}
}
maioridade(20)
maioridade(10)
maioridade (16)


console.log("---------------------------")
/*peça um numero para o usuario, crie uma funcao q caucule 
o dobro e mostre o resultado */
function dobro(numero){
    let aux = numero * 2//numero+ numero
    console.log("o dobro é", aux)
}
let numero = Number (prompt("digite um numero"))
dobro(numero)


/* Uma empresa solicitou um sistema de aumento para
os funcionários, crie uma função que recebe um
salário, se ele for menor que 2500, dê 500 reais de
aumento e mostre o novo salário, senão, apenas
mostre, "sem aumento" */
function aumento(salario){
    if (salario < 2500) {
   if (salario < 2500) {
let novoSalario = salario + 500
console.log("Novo salário é: ",novoSalario)
} else {
console. log("Sem aumento")

}
    }

}

let salario = Number (prompt ("Qual o salario?") )
aumento(salario)



/* Crie um função para controle de alunos, a função
deve mostrar o nome, a idade, e o curso que faz no
Senai */
function controle(){
    let nome3 = prompt ("qual o seu nome?")
    let idade = prompt ("qual sua idade?")
     let curso = prompt ("qual seu curso?")
    console.log(nome3,idade,curso)
}
controle() // chamando a funcao







