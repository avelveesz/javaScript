//1//
function mensagemInicial(){
    console.log("Aprendendo funções com JS")
}
mensagemInicial()
console.log("=======================================")
console.log("=======================================")
//2//
function boasVindas(){
    console.log(" Desenvolvimento de Sistemas!")
}
boasVindas()
boasVindas()
console.log("=======================================")
console.log("=======================================")
//3//
function contarAteDez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

contarAteDez();
console.log("=======================================")
console.log("=======================================")
//4//
function contagemRegressiva() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

contagemRegressiva();
console.log("=======================================")
console.log("=======================================")
//5//
function mensagemRepetida (){
    console.log("Eu gosto de JavaScrip")
}
mensagemRepetida ()
mensagemRepetida()
mensagemRepetida ()
mensagemRepetida()
mensagemRepetida ()
console.log("=======================================")
console.log("=======================================")
//6//
function numerosPares() {
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }
}

tabuadaDoDois ();
//7//
function tabuadaDoDois () {
    for (let i = 0; i <= 18; i ) {
        console.log(i);
    }
}
    console.log("=======================================")
console.log("=======================================")
//8//
//8//
function mostrarSoma(){
    let num1 = 10;
    let num2 = 5;

    let soma = num1 + num2;

    console.log("A soma é: " + soma);
}

mostrarSoma();


console.log("=======================================")
console.log("=======================================")
//9//
function alertaSistema() {
    for (let i = 1; i <= 3; i++) {
        console.log("Atenção! Verifique as informações.");
    }
}

alertaSistema();

console.log("=======================================")
console.log("=======================================")
//10//
function mensagem1(){
    console.log("Bem-vindo ao sistema.");
}

function mensagem2(){
    console.log("Por favor, preencha todos os dados.");
}

function mensagem3(){
    console.log("Obrigado por utilizar o sistema.");
}

mensagem1();
mensagem2();
mensagem3();

console.log("=======================================")
console.log("=======================================")
//11//
function somaNumeros(){
    let soma = 0;

    for(let i = 1; i <= 5; i++){
        let numero = Number(prompt("Digite um número: "));
        soma = soma + numero;
    }

    console.log("A soma dos números é: " + soma);
}

somaNumeros();

console.log("=======================================")
console.log("=======================================")
//12//
function aumentoSalario(){
    let salario = Number(prompt("Digite o salário: "));

    if(salario <= 3500){
        salario = salario + 500;
        console.log("Novo salário: " + salario);
    } else {
        console.log("Não terá aumento");
    }
}

aumentoSalario();

console.log("=======================================")
console.log("=======================================")
//13//
function aprovacaoEscolar(){
    let n1 = Number(prompt("Digite a primeira nota: "));
    let n2 = Number(prompt("Digite a segunda nota: "));
    let n3 = Number(prompt("Digite a terceira nota: "));

    let media = (n1 + n2 + n3) / 3;

    if(media > 6){
        console.log("Aprovado");
    } else if(media >= 5){
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

aprovacaoEscolar();

console.log("=======================================")
console.log("=======================================")
//14//
function avaliacaoAtendimento(){
    let nota = Number(prompt("Dê uma nota para o atendimento: "));

    if(nota == 9 || nota == 10){
        console.log("Excelente");
    } else if(nota == 8){
        console.log("Ótimo");
    } else if(nota == 7 || nota == 6){
        console.log("Bom");
    } else if(nota == 5){
        console.log("Regular");
    } else {
        console.log("Ruim");
    }
}

avaliacaoAtendimento();

