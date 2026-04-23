//1 - Dobro
function dobro(numero){
    let aux = numero * 2;
    console.log("O dobro é:", aux);
}

let numero = Number(prompt("Digite um número"));
dobro(numero);


//2 - Área do retângulo
function calcularArea(base, altura){
    let aux = base * altura;
    console.log("A área do retângulo é:", aux);
}

let base = Number(prompt("Digite a base"));
let altura = Number(prompt("Digite a altura"));

calcularArea(base, altura);


//3 - Converter Celsius para Fahrenheit
function converterParaFahrenheit(temperatura){
    let aux = (temperatura * 1.8) + 32;
    console.log("Temperatura em Fahrenheit:", aux);
}

let temperatura = Number(prompt("Digite a temperatura em Celsius"));
converterParaFahrenheit(temperatura);


//4 - Verificar nota
function verificarNota(nota){
    if(nota >= 7){
        console.log("Aprovado");
    } else if(nota >= 5){
        console.log("Recuperação");
    } else{
        console.log("Reprovado");
    }
}

let nota = Number(prompt("Digite a nota"));
verificarNota(nota);


//5 - Verificar número
function verificarNumero(numero2){
    if(numero2 > 0){
        console.log("Positivo");
    } else if(numero2 < 0){
        console.log("Negativo");
    } else{
        console.log("Zero");
    }
}

let numero2 = Number(prompt("Digite um número"));
verificarNumero(numero2);


//6 - Mostrar pares
function contarPares(numero3){
    for(let i = 0; i <= numero3; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

let numero3 = Number(prompt("Digite um número"));
contarPares(numero3);


//7 - Somar intervalo
function somarIntervalo(num1, num2){
    let soma = 0;

    for(let i = num1; i <= num2; i++){
        soma = soma + i;
    }

    console.log("A soma do intervalo é:", soma);
}

let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));

somarIntervalo(num1, num2);


//8 - Repetir nome
function repetirNome(nome, numero4){
    for(let i = 0; i < numero4; i++){
        console.log(nome);
    }
}

let nome = prompt("Digite seu nome");
let numero4 = Number(prompt("Digite quantas vezes repetir"));

repetirNome(nome, numero4);

//9//
function tabuada(numero5){
    for(let i = 1; i <= 10; i++){
        console.log(numero5 + " x " + i + " = " + (numero5 * i));
    }
}

let numero5 = Number(prompt("Digite um número"));
tabuada(numero5);

//10//
function contagemPersonalizada(numero6){
    for(let i = numero6; i >= 0; i--){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

let numero6 = Number(prompt("Digite um número"));
contagemPersonalizada(numero6);

//11/
function mediaAluno(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7){
        console.log("Aprovado");
    } else if(media >= 5){
        console.log("Recuperação");
    } else{
        console.log("Reprovado");
    }
}

let n1 = Number(prompt("Digite a primeira nota"));
let n2 = Number(prompt("Digite a segunda nota"));
let n3 = Number(prompt("Digite a terceira nota"));

