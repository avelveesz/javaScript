let idade = 10
console.log(idade >= 18)
console.log ("------------------")
let numero = Number(prompt("informe um numero"))
let resultado = numero > 10
console.log(resultado)
console.log ("------------------")
let valor1 = 5
let valor2 = 7
console.log (valor1 > valor2) //  false
console.log (valor1 < valor2) //  true
console.log (valor1 == valor2) //  false
/* > maior  >=maior ou igual  == igual
< menor <=menor ou igual   !=diferente*/
console.log ("------------------")
// == compra apenas o valor
//=== compra o valor e o tipo
console.log(5 == "5")// true
console.log(5 == "5")// false
console.log ("------------------")
let nome = prompt ("qual o nome do usuario?")
console.log(nome == "TDS2")
console.log("----------------")
let preco = Number(prompt("Qual o valor do produto?") )
console.log(preco >= 100)
console. log(preco <= 50)
console.log("----------------")

/* Uma loja da desconto nos produtos direto no caixa.
Faça um programa que receba o valor pago pelo usuário, dê
R$20 reais de desconto para ele e mostre se o valor que
será pago é maior ou igual a R$50 */
let valorpago = Number (prompt("quanto pagou"))
let valortotal = valorpago - 20
console.log("----------------")
/*pergunte o NIF de um funcionario e verifique se ele:
- é igual a SN1081655
- é diferentre de SN1047520 */
let NIF = Number(prompt("informe seu NIF"))
console.log(NIF == "SN1081655")
console.log(NIF == "SN1047520")




