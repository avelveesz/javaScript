function arredondar() {
    let numero = document.getElementById("numero").value
    let resultado = Math.round(numero)

    document.getElementById("resultado").innerText = resultado
}


function arredondar1() {
    let numero1 = document.getElementById("numero1").value
        let resultado1 = Math.floor(numero1)
console.log(Math.floor(numero1))

    document.getElementById("resultado1").innerText = resultado1

}
function arredondar2() {
    let numero2 = document.getElementById("numero2").value
        let resultado2 = Math.ceil(numero2)
console.log(Math.ceil(numero2))

    document.getElementById("resultado2").innerText = resultado2
}


function raizQuadrada(){
    let raiz = document.getElementById("raiz").value
    let resposta = document.getElementById("resposta")
    resposta.innerText = Math.sqrt(raiz)
}




console.log(Math.max(5,12,9,30,7))
console.log(Math.min(5,12,9,30,7))





function sorteio() {
    let resposta5 = document.getElementById("resposta5")

    let resultado = Math.floor(Math.random() * 10) + 1

    resposta5.innerText = resultado
}




let resposta6 = document.getElementById("resposta6")
function dado() {
    let num = Math.round(Math.random() * 6 ) + 1
    resposta6.innerText = "numero:" +num
}













