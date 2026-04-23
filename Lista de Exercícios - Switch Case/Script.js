// 1 - Dias da Semana
console.log("---------1--------")

let dias = Number(prompt(
    "Informe o dia da semana \n1 - Domingo\n2 - Segunda-feira\n3 - Terça-feira\n4 - Quarta-feira\n5 - Quinta-feira\n6 - Sexta-feira\n7 - Sábado"
))

switch (dias) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7.")
}


// 2 - Classificação de Idade
console.log("---------2--------")

let idade = Number(prompt(
    "Informe a idade \n5 - Infantil A\n10 - Infantil B\n15 - Juvenil A\n20 - Juvenil B\n30 - Adulto"
))

switch (idade) {
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("Adulto")
        break
    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.")
}


// 3 - Turno de Trabalho
console.log("---------3--------")

let turno = prompt("Informe o turno (M, V ou N): ")

switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno inválido. Insira M, V ou N.")
}


// 4 - Números e Mensagens
console.log("---------4--------")

let numero = Number(prompt("Informe um numero de 1 a 5"))

switch (numero) {
    case 1:
        console.log("Bom dia!")
        break
    case 2:
        console.log("Boa tarde!")
        break
    case 3:
        console.log("Boa noite!")
        break
    case 4:
        console.log("Hora de ir dormir!")
        break
    case 5:
        console.log("Vá dormir AGORA!!!!")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}


// 5 - Estações do Ano
console.log("---------5--------")

let estacao = Number(prompt(
    "Insira um numero \n1 - Primavera\n2 - Verão\n3 - Outono\n4 - Inverno"
))

switch (estacao) {
    case 1:
        console.log("Primavera")
        break
    case 2:
        console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4:
        console.log("Inverno")
        break
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}


// 6 - Menu de Operações Matemáticas
console.log("---------6--------")

let operacoes = Number(prompt(
    "Insira um numero \n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir"
))

switch (operacoes) {

    case 1:
        let numero1 = Number(prompt("Informe um numero"))
        let numero2 = Number(prompt("Informe outro numero"))
        console.log("A soma é:", numero1 + numero2)
        break

    case 2:
        let numero3 = Number(prompt("Informe um numero"))
        let numero4 = Number(prompt("Informe outro numero"))
        console.log("A subtração é:", numero3 - numero4)
        break

    case 3:
        let numero5 = Number(prompt("Informe um numero"))
        let numero6 = Number(prompt("Informe outro numero"))
        console.log("A multiplicação é:", numero5 * numero6)
        break

    case 4:
        let numero7 = Number(prompt("Informe um numero"))
        let numero8 = Number(prompt("Informe outro numero"))
        console.log("A divisão é:", numero7 / numero8)
        break

    default:
        console.log("Operação inválida.")
}


// 7 - Código de Produto
console.log("---------7--------")

let codigo = Number(prompt("7- Escolha um código: "))

switch (codigo) {
    case 100:
        console.log("Caneta")
        break
    case 200:
        console.log("Lápis")
        break
    case 300:
        console.log("Borracha")
        break
    case 400:
        console.log("Caderno")
        break
    default:
        console.log("Produto não encontrado.")
}


// 8 - Nota por Conceito
console.log("---------8--------")

let conceito = prompt("8- Escolha uma letra: ")

switch (conceito) {
    case "A":
        console.log("Excelente")
        break
    case "B":
        console.log("Bom")
        break
    case "C":
        console.log("Regular")
        break
    case "D":
        console.log("Ruim")
        break
    case "F":
        console.log("Reprovado")
        break
    default:
        console.log("Conceito inválido.")
}


// 9 - Jogo
console.log("---------9--------")

let acao = prompt("9- Escolha um número de 1 a 4: ")

switch (acao) {
    case "1":
        console.log("Atacar")
        break
    case "2":
        console.log("Defender")
        break
    case "3":
        console.log("Curar")
        break
    case "4":
        console.log("Fugir")
        break
    default:
        console.log("Opção inválida. Você perdeu a vez.")
}


// 10 - Conversor
console.log("---------10--------")

let conversor = Number(prompt(
    "Escolha uma opção:\n1 - Real para Dólar\n2 - Dólar para Real\n3 - Real para Euro"
))

let dolar = 5.00
let euro = 5.50

switch (conversor) {

    case 1:
        let real1 = Number(prompt("Digite o valor em Real:"))
        console.log("Valor convertido em Dólar:", real1 / dolar)
        break

    case 2:
        let dolar2 = Number(prompt("Digite o valor em Dólar:"))
        console.log("Valor convertido em Real:", dolar2 * dolar)
        break

    case 3:
        let real3 = Number(prompt("Digite o valor em Real:"))
        console.log("Valor convertido em Euro:", real3 / euro)
        break

    default:
        console.log("Opção inválida.")
}


// 11 - Atendimento
console.log("---------11--------")

let opcao6 = Number(prompt("Escolha:\n1 - Suporte Técnico\n2 - Financeiro\n3 - Comercial\n4 - Cancelamento"))

switch (opcao6) {
    case 1:
        console.log("Suporte Técnico")
        break
    case 2:
        console.log("Financeiro")
        break
    case 3:
        console.log("Comercial")
        break
    case 4:
        console.log("Cancelamento")
        break
    default:
        console.log("Setor inválido")
}


// 12 - Lanchonete
console.log("---------12--------")

let opcao7 = Number(prompt("Escolha:\n1 - Hambúrguer\n2 - Pizza\n3 - Suco\n4 - Sorvete"))

switch (opcao7) {
    case 1:
        console.log("Hambúrguer")
        break
    case 2:
        console.log("Pizza")
        break
    case 3:
        console.log("Suco")
        break
    case 4:
        console.log("Sorvete")
        break
    default:
        console.log("Pedido inválido")
}


// 13 - Avaliação
console.log("---------13--------")

let opcao8 = Number(prompt("Digite uma nota de 1 a 5:"))

switch (opcao8) {
    case 1:
        console.log("Péssimo")
        break
    case 2:
        console.log("Ruim")
        break
    case 3:
        console.log("Regular")
        break
    case 4:
        console.log("Bom")
        break
    case 5:
        console.log("Excelente")
        break
    default:
        console.log("Nota inválida")
}


// 14 - Tipo de Usuário
console.log("---------14--------")

let opcao9 = Number(prompt("Escolha:\n1 - Administrador\n2 - Professor\n3 - Aluno\n4 - Visitante"))

switch (opcao9) {
    case 1:
        console.log("Administrador")
        break
    case 2:
        console.log("Professor")
        break
    case 3:
        console.log("Aluno")
        break
    case 4:
        console.log("Visitante")
        break
    default:
        console.log("Usuário inválido")
}


// 15 - Categoria de Filme
console.log("---------15--------")

let opcao10 = Number(prompt("Escolha:\n1 - Ação\n2 - Comédia\n3 - Drama\n4 - Terror\n5 - Animação"))

switch (opcao10) {
    case 1:
        console.log("Ação")
        break
    case 2:
        console.log("Comédia")
        break
    case 3:
        console.log("Drama")
        break
    case 4:
        console.log("Terror")
        break
    case 5:
        console.log("Animação")
        break
    default:
        console.log("Categoria inválida")
}