
const tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []

tarefas
    .filter( tarefa => tarefa.status < 100)
    .map( tarefa => Card(tarefa) )

function Card(tarefa){

    const card = document.createElement("article")
    card.id = tarefa.id

    const content = `
                <header>${tarefa.titulo}</header>
                <p>
                    ${tarefa.descricao}
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffd91a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                    ${tarefa.pontos}   
                </p>
                <progress id="status" value="${tarefa.status}" max="100"></progress>
                <footer>
                    <button onclick="decrementar('${tarefa.id}')">-</button>
                    <button onclick="apagar('${tarefa.id}')" class="pico-background-pink-600">apagar</button>
                    <button onclick="incrementar('${tarefa.id}')" >+</button>
                </footer>
    `  

    card.innerHTML = content

    document.querySelector("#lista").appendChild(card)

}