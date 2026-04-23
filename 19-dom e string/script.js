let nome = "evelyn"
let maiuscula = nome.toLocaleUpperCase()
let minuscula = nome.toLocaleLowerCase()

console.log(maiuscula)
console.log(minuscula)

//-----------------------------
function mostrar() {
let texto = document.getElementById("texto").
value
let mn = document.getElementById("mn")
let ms = document.getElementById("ms")
let letras = document.getElementById("letras")

ms.innerText = texto. toUpperCase()
mn.innerText = texto. toLocaleLowerCase()
letras.innerText = texto.length
let texto2 = document.getElementById("texto")
texto2.value = "" 
}

//-----------------------------
function mostrarUltimaLetra() {
    let palavra = document.getElementById("palavra").value
    let resultado = document.getElementById("resultado")

    // pega a última letra
    let ultimaLetra = palavra[palavra.length - 1]

    resultado.innerText = ultimaLetra
}

//-----------------------------

function parte(){
let palavra2 = document.getElementById("palavra2").value
let resultado2 = document.getElementById("resultado2")

//slice (inicio,fim)
let parte = palavra2.slice(0,4)
resultado2.innerText = parte

resultado2.innerText = parte


let letra = texto.length

}
//-----------------------------
function mostrar2() {
    let texto = document.getElementById("texto2").value
    let resultado3 = document.getElementById("resultado3")

    let ultimas = texto [texto.length -3]
let ultimas1 = texto [ texto.length-2]
let ultimas2 = texto [ texto.length-1 ]
    resultado3.innerText = texto[texto.length -3] +  texto[texto.length -2] +  texto[texto.length -1]   
    
}
//-----------------------------

//-6-----------------------------
function juntar() {
    let palavra1 = document.getElementById("palavra1").value
    let palavra2 = document.getElementById("palavra2").value
    let juntos = document.getElementById("juntos")

    juntos.innerText = palavra1 + " "+ palavra2
}

//-----------------------------
function parte(){
let palavras = document.getElementById("palavras").value
let resultado4 = document.getElementById("resultado4")

//slice (inicio,fim)
let parte = palavras.slice(0,1)
resultado4.innerText = parte

resultado4.innerText = parte


let letra = texto.length

}
//-----------------------------

function mensagem() {
    let nome = document.getElementById("nome1").value
    let resultado = document.getElementById("resultado1")

    resultado.innerText = "Olá, " + nome.toUpperCase() + "! Seja bem-vinda ao sistema."
}
//-----------------------------

function verificar() {
    let nome = document.getElementById("nome2").value
    let resultado5 = document.getElementById("resultado5")

    if (nome.length <= 5) {
        resultado5.innerText = "Nome curto"
    } else {
        resultado5.innerText = "Nome longo"
    }
}




