function adicionar(){
    let tarefa = document.getElementById("tarefa").value
      let lista = document.getElementById("Lista")

      // avisa quando a tarefa estiver vazia
      if(tarefa == ""){
alert("digite uma tarefa")
return//para cancelar a funçao
      }
      //criar o <li>
      let novoItem = document.createElement("li")
      novoItem.innerText = tarefa
      // adicionar o <li> no site
      lista.appendChild(novoItem)
//limpar o input
tarefaInput.value = ""
//apagar a terefa
novoItem. onclick = function() {
lista.removeChild (novoItem)

}

}