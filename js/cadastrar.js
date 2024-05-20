function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const descricao = document.querySelector("#descricao").value
    const pontos = document.querySelector("#pontos").value

    const tarefa = {
        id: "id" + new Date().getTime(),
        titulo,
        descricao,
        pontos,
        status: 0
    }
    
    console.log(tarefa)

    validar(tarefa)

    salvar(tarefa)


}

function validar(tarefa){
    let valido = true
    limparErros()

    if (tarefa.titulo == ""){
        document.querySelector("#titulo").ariaInvalid = true
        document.querySelector("#erro-titulo").innerText = "o título é obrigatório"
        valido = false
    }
    if (tarefa.descricao == ""){
        document.querySelector("#descricao").ariaInvalid = true
        document.querySelector("#erro-descricao").innerText = "a descrição é obrigatória"
        valido = false
    }
    if (tarefa.pontos < 0){
        document.querySelector("#pontos").ariaInvalid = true
        document.querySelector("#erro-pontos").innerText = "pontuação deve ser positiva"
        valido = false
    }

    if(!valido) throw new Error("dados inválidos")
}

const limparErros = function () {
    document.querySelectorAll("input").forEach( input => input.ariaInvalid = false )
    document.querySelectorAll("small").forEach( small => small.innerText = "")
}

function salvar(tarefa){
    const tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}