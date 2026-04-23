// funcao com retorno
function somar1(n1, n2){
    return n1 + n2
}
console.log(somar1(1,2))

//funcao anonima
let somar2 = function (n3,n4){
    return n3 + n4
}
console.log(somar2 (1,2))
//arrow function - funcao da seta
let somar3 = (n5,n6) => {
    return n5 + n6
}
console.log(somar3(1,2))
console.log("--------------------------")
//peça um numero e verifique se é positivo, 
// negativo ou zero
let classificar = (numero) => {
    if (numero<0){
        return "negativo"
    }else if (numero > 0){
        return "positivo"
    } else {
        return"zero"
    }
}

let numero = Number (prompt("qual o numero"))
console.log(classificar(numero))
console.log(imparoupar(num))


let imparOuPar = (num) =>{
    let aux = num % 2
    if (aux == 0) { // num % 2 == 0
        return "Par"
    } else{
        return "Ímpar"
    }
}
// let num = Number(prompt("Qual o número?"))
// console.log(imparOuPar(num))

let dobro1 = (n) => {
    return n * 2
}
let dobro2 = n => n * 2
console.log(dobro1(5))
console.log(dobro2(5))
console.log("---------------------")

/*peça um numero para o usuario, se for
menor ou igual a 10, retorne(numero + 3 * 6 -1 )
senaoo, retorne (numero / 2 + 3 * 19) */
let cauculo = (numero2) => {
    if (numero2 <= 10){
        return numero2 + 3 * 6 - 1

    }else{
        return numero / 2 + 3 * 19
    }
}
let numero2 = Number (prompt("informe um numero:"))
console.log(cauculo(numero2))