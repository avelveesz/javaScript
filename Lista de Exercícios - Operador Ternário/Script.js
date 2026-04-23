//1 - Verificação de Maioridade
console.log("---------1----------")
let idade = Number(prompt("Informe a idade"))
let verificacao = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(verificacao)

//2 - Par ou Ímpar
console.log("---------2----------")
let num = Number(prompt("Informe um número"))
let verificacao1 = num % 2
let verificacao2 = verificacao1 == 0 ? "Par" : "Ímpar"
console.log(verificacao2)

//3 - Resultado Escolar
console.log("---------3----------")
let nota = Number(prompt("Informe a nota"))
let verificacao3 = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(verificacao3)

//4 - Saldo Bancário
console.log("---------4----------")
let saldo = Number(prompt("Informe o saldo"))
let resultado1 = saldo > 0 ? "Saldo positivo" : "Saldo Negativo"
console.log(resultado1)

//5 - Desconto na Compra
console.log("---------5----------")
let valor_compra = Number(prompt("Informe o valor da compra"))
let resultado2 = valor_compra >= 100 ? "você vai receber 10% de desconto" : "Você não obteve desconto"
console.log(resultado2)

//6 - Entrada em Evento
console.log("---------6----------")
let idade1 = Number(prompt("Informe a idade"))
let verificacao4 = idade1 >= 18 ? "Entrada permitida" : "Entrada proibida"
console.log(verificacao4)

//7 - Login Simples
console.log("---------7----------")
let usuario = prompt("Informe o usuário")
let verificacao5 = usuario == "admin" ? "Acesso liberado" : "Acesso negado"
console.log(verificacao5)

//8 - Temperatura
console.log("---------8----------")
let temperatura = Number(prompt("Informe a temperatura"))
let clima = temperatura > 30 ? "Está quente" : "Temperatura normal"
console.log(clima)
//9 - Número Positivo ou Negativo

console.log("---------9----------")
let user = Number(prompt("Informe um número"))
let resultado3 =  user > 0 ? "O número é positivo" :"O número é negativo ou é zero" 
console.log(resultado3)

//10 - Faixa Etária
console.log("---------10----------")
let idade3 = Number(prompt("Informe a idade"))
let faixa = idade3 < 12 ? "Criança" : idade3 < 18 ? "Adolescente" : idade3 < 60 ? "Adulto" : "Idoso"
console.log(faixa)

//11 - Velocidade do Veículo
console.log("---------11----------")
let velocidade = Number(prompt("Informe a velocidade"))
let resultado4 = velocidade > 80 ? "Multado" :  "Dentro do limite"
console.log(resultado4)

//12 - Compra Aprovada
console.log("---------12----------")
let valor =  Number(prompt("Informe o valor da compra"))
let limite =  Number(prompt("Informe o limite do cartão"))
let resultado5 = valor <= limite ? "Compra aprovada" : "Compra recusada"
console.log(resultado5)

//13  - Sistema de Pontuação de Jogo
console.log("---------13----------")
let pontuacao = Number(prompt("Informe a pontuação"))
let resultado6 = pontuacao < 100 ? "Iniciante" : pontuacao < 1000 ? "Intermediário" : "Mestre"
console.log (resultado6)