/*1*/

let idade = (prompt("qual sua idade"))
let verificacao = (prompt("tem CNH?"))

console.log(idade  <=18 || verificacao == "sim")

/*2*/
let nota = (prompt("qual suas notas?"))
let faltas = (prompt("quantos dias faltou?"))
console.log(nota  >=6 || faltas <= 10)

/*3*/
let idade2 = 18
let convite = true
console.log(idade2 >= 18 && convite == true)

/*4*/
let salario = (prompt("valor do seu salario?"))
let nome = (prompt("seu nome esta limpo"))

console.log(salario  >=2500 && nome == "sim")

/*5*/
let convitecasamento = (prompt("tem convite"))
let nomelista = (prompt("tem nome na lista"))

console.log(convitecasamento == "sim" && nomelista == "sim"
)

/*6*/
let valor = (prompt("qual o valor da compra?"))
let vip = (prompt("voce é cliente vip?"))

console.log(valor >80 && vip == "sim"
)

/*7*/

let nota2 = Number(prompt("Qual sua nota?"))
let trabalho = prompt("Fez trabalho extra? (sim/nao)")
console.log(nota2 > 5 && trabalho == "sim")


/*8*/
let senha3 = prompt("Digite a senha")
let digital = prompt("Digital reconhecida? (true/false)")
console.log(senha3 == "1234" && digital == "true")



/*9*/
let bloqueado = false
console.log(!bloqueado)



/*10 */
let temCadastro = false
console.log(!temCadastro)

/*11 */
let login = prompt("Digite o login")
let senha = prompt("Digite a senha")
console.log(login == "ADMIN" && senha == "senai2026")



/*12*/
let valor2 = Number(prompt("Valor da compra"))
let cartao = prompt("Possui cartao da loja? (sim/nao)")
let nomeLimpo = prompt("Nome esta limpo? (sim/nao)")
console.log(valor2 > 300 && cartao == "sim" && nomeLimpo == "sim")



/*13*/ 
let idade3 = Number(prompt("Qual sua idade?"))
let documentos = prompt("Entregou os documentos? (sim/nao)")
let pagamento = prompt("Pagou a matricula? (sim/nao)")
console.log(idade3 >= 17 && documentos == "sim" && pagamento == "sim")



/*14 */
let idade4 = Number(prompt("Qual sua idade?"))
let socio = prompt("É socio? (sim/nao)")
let convidado = prompt("É convidado? (sim/nao)")
console.log(idade4 >= 15 && (socio == "sim" || convidado == "sim"))