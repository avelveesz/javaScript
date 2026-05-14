let perguntas = [
    {
        pergunta: 
        "Qual ritual sombrio Sabrina precisa realizar ao completar 16 anos?",
        respostas: [
            " A) Casamento das Sombras",
            "B) Batismo Sombrio",
            "C) Ritual da Lua Vermelha",
            "D) Juramento Arcano"
        ],
        correta: 1
    },

    {
        pergunta:
         "Quem assume o corpo da professora Mary Wardwell durante a série?",
        respostas: [
            "A) Zelda Spellman",
            "B) Prudence",
            "C) Lilith",
            " D) Agatha"
        ],
        correta: 2
    },

    {
        pergunta:
         "Qual é o nome da escola de magia frequentada por Sabrina?",
        respostas: [
            "A) Instituto Arcano de Salem",
            "B) Academia da Lua Negra",
            "C) Academia das Artes Ocultas",
            "D) Escola das Sombras"
        ],
        correta: 2
    },

    {
        pergunta: 
        "Quem mais rivaliza com Sabrina no começo da série entre as Weird Sisters?",
        respostas: [
            "A) Dorcas",
            "B) Agatha",
            "C) Prudence",
            "D) Roz"
        ],
        correta: 2
    },

    {
        pergunta: 
        "Qual personagem consegue desenvolver a habilidade conhecida como “A Astúcia",
        respostas: [
            "A) Theo",
            "B) Harvey",
            "C) Roz",
            "D) Sabrina"
        ],
        correta: 2
    },
    {
    pergunta: 
        "Quem é o líder da Igreja da Noite durante grande parte da história?",
        respostas: [
            "A) Nick Scratch",
            "B) Faustus Blackwood",
            "C) Ambrose",
            "D) Caliban"
        ],
        correta: 1

    },
    {
       pergunta: 
        "Qual é o nome do primo de Sabrina que vive na casa dos Spellman?",
        respostas: [
            "A) Harvey Kinkle",
            "B) Theo Putnam",
            "C) Nick Scratch",
            "D) Ambrose Spellman"
        ],
        correta: 3   
    },
    {
           pergunta: 
        "Qual personagem mortal descobre o mundo das bruxas ao longo da série?",
        respostas: [
            "A) Harvey Kinkle",
            "B) Dorcas",
            "C) Roz",
            "D) Theo",
        ],
        correta: 0
    },
    {
               pergunta: 
        "Qual é o verdadeiro nome do Senhor das Trevas?",
        respostas: [
            "A) Damien Nightstar",
            "B) Lúcifer Morningstar",
            "C) Asmodeus Blackwell",
            "D) Malachai Thorn",
        ],
        correta: 1
    },
    {
              pergunta: 
        "Qual personagem aprisiona o Senhor das Trevas dentro do próprio corpo?",
        respostas: [
            "A) Nick Scratch",
            "B) Harvey",
            "C) Ambrose",
            "D) Theo Putnam",
        ],
        correta: 0
    }




























]




let perguntaAtual = 0
//Qual pergunta ta sendo exibida
//Começa na posição 0 //Primeira pergunta
let pontuacao = 0 //Quantas respostas certas

function mostrarPergunta(){
let pergunta = perguntas[perguntaAtual]
//Pega a pergunta atual dentro do array


document.getElementById("pergunta").innerText
 = pergunta.pergunta


let respostasDiv = document.getElementById("respostas")
respostasDiv.innerHTML = ""
//limpar a resposta adicionar outra
pergunta. respostas. forEach(function(resposta,
index) {
respostasDiv. innerHTML += `<button
onclick="verificarResposta(${index})">${resposta}</button>`
})

}
function verificarResposta(index) {
let pergunta = perguntas [perguntaAtual]

let resultado = document.getElementById
("resultado")
if(index == pergunta.correta) {
resultado. innerText = "Acertou"
pontuacao ++
} else{
    resultado. innerText = "Errou"
}
}
function proximaPergunta() {
perguntaAtual++
//vai para a próxima pergunta
if(perguntaAtual < perguntas.length) {
mostrarPergunta()
document.getElementById("resultado").
innerText = ""
} else {
mostrarResultadoFinal()
}
}
function mostrarResultadoFinal(){
document.getElementById("container").innerHTML
= `
<h2>Quiz Finalizado !</h2>
<p>Sua pontuação foi: ${pontuacao}</p>
<button onclick="location.reload()">Jogar
novamente</button> `
}
mostrarPergunta()



