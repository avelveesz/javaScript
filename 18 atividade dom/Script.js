// 1 - Alterar texto
function mudarTexto() {
    let titulo = document.getElementById("titulo")
    titulo.innerText = "Aprendendo DOM com JavaScript"
}

// 2 
function saudacao() {
    let nome = document.getElementById("nome1").value
    let mensagem = document.getElementById("mensagem")

    mensagem.innerText = "Bem-vindo ao sistema, " + nome
}

// 3
function mudarFrase() {
    let frase = document.getElementById("frase")
    frase.innerText = "Manipulando HTML com JavaScript"
}

// 4 
function verificarNome() {
    let nome = document.getElementById("nome2").value
    let resposta = document.getElementById("resposta")

    if (nome === "") {
        resposta.innerText = "Digite um nome primeiro!"
    } else {
        resposta.innerText = "Olá, " + nome
    }
}

// 5 
function modoEscuro() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}
//6//
function Verificarnota() {
    let nota = document.getElementById("nota").value
    let resposta = document.getElementById("Verificar")

    if (nota >=7) {
        resposta.innerText = "Aluno aprovado"
    } else {
        resposta.innerText = "Aluno reprovado" 
    }
}

//7//
function surpresa() {
    let apareceu = document.getElementById("apareceu")
    apareceu.innerText = "Você encontrou a mensagem secreta"
}

//8//
function destacarTexto() {
    let texto = document.getElementById("texto")
    texto.style.color = "red"
    texto.style.fontWeight = "bold"
}

// 9 
function contarCaracteres() {
    let texto = document.getElementById("campoTexto").value
    let resultado = document.getElementById("resultado")

    resultado.innerText = "Você digitou " + texto.length + " caracteres"
}

// 10 
function mudarCor() {
    let texto = document.getElementById("textoCor")
    texto.style.color = "blue"
}

// 11 
function esconderTexto() {
    let texto = document.getElementById("textoSumir")
    texto.style.display = "none"
}

// 12 
function calcularMeses() {
    let idade = document.getElementById("idade").value
    let meses = document.getElementById("meses")

    meses.innerText = "Você já viveu " + (idade * 12) + " meses"
}

// 13 
function verificarIdade() {
    let idade = document.getElementById("idade2").value
    let resposta = document.getElementById("respostaIdade")

    if (idade >= 18) {
        resposta.innerText = "Você é maior de idade"
    } else {
        resposta.innerText = "Você é menor de idade"
    }
}