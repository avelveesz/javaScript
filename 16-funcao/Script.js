//declararivas
function soma(n1,n2){
    return n1 + n2
}
let n1 = 5 
let n2 = 7
console.log(Soma1(n1,n2))


//amomima
let soma2 = function (n3,n4){
    return n3 + n4
}
let n3 = 5
let n4 = 7
console.log(soma(n3,n4))

//saudacao
let bomdia = function(nome){
    return "bom dia" + nome
}
let nome = prompt ("qual seu nome?")
console.log(bomdia(nome))

//multiplicacao de tres numeros
let multiplicar = function (num1, num2, num3){
return num1 * num2 * num3
}
let num1 = Number(prompt("informe um numero"))
let num2 = Number(prompt("informe um numero"))
let num3 = Number(prompt("informe um numero"))
console.log(multiplicar(num1,num2,num3))

/*peça uma temperatura, se tiver acima de 30 diga "calor", 
se tiver abaixo de 12 diga "frio", senao, diga "Ok"*/
function previsaodotempo (temperatura){
    if(temperatura > 30){
        return "calor"
    } else if (temperatura < 12){
        return "frio"
    }else{
        return "ok"
    }
}


/*peça um salario,se ele for menor ou igual a 25000 
de 700 reias de aumento, senao se for menor ou igual a 3200,
de 300 reais de uamento, senoa mostre "sem aumento" */
let aumento = function(salario) {
if (salario <= 2500) {
return salario + 700
} else if (salario <= 3200) {
return salario +1300
} else {
return "sem aumento"
}
}
let salario = Number (prompt("Qual o salário?"))
console. log(aumento(salario))