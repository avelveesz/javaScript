// 04 operadores logicos
//&& - e - tudo tem que ser verdadeiro
// || - ou - apenas uma coisa deve ser verdade
// ! - nao - inverte o resultado 

let idade = 18
let convite = true
console.log(idade >= 18 && convite == true)

console.log("-----------------")
let dia = "quinta"
console.log(dia == "sabado" || dia == " domingo")

console.log("-----------------")
let valor = 20
console.log(valor >=  10 && valor <=99)

console.log("-----------------")
let bloqueado = false
console.log(!bloqueado)


if(!bloqueado) {
console.log("nao pode usar")
}

console.log("-----------------")
let numero = Number(prompt("informe um numero"))
console.log(!(numero >=100 ))

console.log("-----------------")
/*para fazer login em um computador do senai, o usuario deve ser
"TDS2" e a senha "senai2026" faca o codigo q pergunte 
as credencias p o uso e mostre se eles consegue ou n acessar */

console.log("-----------------")

let login = (prompt("informe o usuario"))
let acesso = (prompt("informe a senha"))

console.log(login = "TDS2" && acesso == "senai2026")




/* Para ser aprovado o aluno precisa ter nota maior ou
igual a 50 e ter a frequência maior ou igual a 75.
Peça as informações para o usuário e veja se ele será
*/
let nota = Number(prompt("qual sua nota"))
let frequencia = Number(prompt("qual sua frequencia?"))
console.log(nota >= 50 && frequencia >= 75)


/* Para assistir um filme de terror no cinema, é preciso
ter idade maior ou igual a 14 ou estar acompanhado do
responsável */


console.log("-----------------")

let idade2 = (prompt("qual sua idade"))
let acompanhante = (prompt("esta acompanhado?"))

console.log(idade2  >=14 || acompanhante == "sim")

/*/* Para fazer academia do Sesi você deve ser aluno do
sesi ou do senai e pagar a mensalidade */

let escola = prompt("De qual escola você é?")
let mensalidade = prompt ("Voce paga a mensalidade?")

console.log(escola == "sesi" ||   escola == "senai" && mensalidade == "sim"
)


/*pergunte p usuario se ele tem interne(true false e mostre) */
console.log(internet == "true")

console.log(internet)


