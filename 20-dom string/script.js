// dom string
let nome = "juliana"
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
//length conta quantas letras tem
let texto2 = document.getElementById("texto")
texto2.value = "" // apaga o q esta escrito no input
}
//------------------
function parte(){
let palavra = document.getElementById("palavra").value
let resultado = document.getElementById("resultado")

//slice (inicio,fim)
let parte = palavra.slice(0,3)
resultado.innerText = parte

resultado.innerText = parte

let final = document.getElementById("final")
let letra = texto.length
final.innerText =  palavra[palavra.length-1]
}

/* crie dois inputs um pedindo uma palavra p o usuario, 
crie um botao "juntar" q mostra as duas palavras em um p*/

function juntar() {
    let palavra1 = document.getElementById("palavra1").value
    let palavra2 = document.getElementById("palavra2").value
    let juntos = document.getElementById("juntos")

    juntos.innerText = palavra1+""+palavra2
}

