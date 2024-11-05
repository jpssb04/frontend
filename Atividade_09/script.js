const formularioTarefa = document.getElementById("formularioTarefa");
const listaTarefas = document.getElementById("listaTarefas");
let filtroStatus = "todos"; 
let filtroPrioridade = "todos"; 

document.addEventListener("DOMContentLoaded", () => {
    carregarTarefas();
});

formularioTarefa.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nomeTarefa = document.getElementById("nomeTarefa").value;
    const dataConclusao = document.getElementById("dataConclusao").value;
    const prioridadeTarefa = document.getElementById("prioridadeTarefa").value;
    const tarefa = { id: Date.now(), nome: nomeTarefa, data: dataConclusao, prioridade: prioridadeTarefa, concluida: false };
    salvarTarefa(tarefa);
    exibirTarefas();
    formularioTarefa.reset();
});

const salvarTarefa = (tarefa) => {
    const tarefas = obterTarefas();
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

const obterTarefas = () => JSON.parse(localStorage.getItem("tarefas")) || [];

const carregarTarefas = () => {
    exibirTarefas();
    verificarPrazos();
};

const exibirTarefas = () => {
    const tarefas = obterTarefas().filter(tarefa => {
        if (filtroStatus === "concluidas") return tarefa.concluida;
        if (filtroStatus === "pendentes") return !tarefa.concluida;
        return true;
    }).sort((a, b) => {
        if (filtroPrioridade === "alta") return b.prioridade === "alta" ? 1 : -1;
        if (filtroPrioridade === "media") return b.prioridade === "media" ? 1 : -1;
        if (filtroPrioridade === "baixa") return b.prioridade === "baixa" ? 1 : -1;
        return 0;
    });

    listaTarefas.innerHTML = "";
    tarefas.forEach(tarefa => {
        const itemLista = document.createElement("li");
        itemLista.className = tarefa.concluida ? "concluida" : "";
        itemLista.classList.toggle("urgente", prazoProximo(tarefa.data) && !tarefa.concluida);
        itemLista.innerHTML = `
            <span>${tarefa.nome} - ${tarefa.data} - ${tarefa.prioridade}</span>
            <button onclick="alternarConcluida(${tarefa.id})">${tarefa.concluida ? "Desfazer" : "Concluir"}</button>
            <button onclick="editarTarefa(${tarefa.id})">Editar</button>
            <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
        `;
        listaTarefas.appendChild(itemLista);
    });
};

const alternarConcluida = (id) => {
    const tarefas = obterTarefas();
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) tarefa.concluida = !tarefa.concluida;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    exibirTarefas();
};

const editarTarefa = (id) => {
    const tarefas = obterTarefas();
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) {
        document.getElementById("nomeTarefa").value = tarefa.nome;
        document.getElementById("dataConclusao").value = tarefa.data;
        document.getElementById("prioridadeTarefa").value = tarefa.prioridade;
        excluirTarefa(id); 
    }
};

const excluirTarefa = (id) => {
    const tarefas = obterTarefas().filter(tarefa => tarefa.id !== id);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    exibirTarefas();
};

const filtrarPorStatus = () => {
    filtroStatus = filtroStatus === "todos" ? "concluidas" : filtroStatus === "concluidas" ? "pendentes" : "todos";
    exibirTarefas();
};

const filtrarPorPrioridade = () => {
    filtroPrioridade = filtroPrioridade === "todos" ? "alta" : filtroPrioridade === "alta" ? "media" : filtroPrioridade === "media" ? "baixa" : "todos";
    exibirTarefas();
};

const verificarPrazos = () => {
    const tarefas = obterTarefas();
    tarefas.forEach(tarefa => {
        if (!tarefa.concluida && prazoProximo(tarefa.data)) {
            alert(`A tarefa "${tarefa.nome}" está próxima do prazo de conclusão!`);
        }
    });
};

const prazoProximo = (dataConclusao) => {
    const hoje = new Date();
    const data = new Date(dataConclusao);
    const diferencaTempo = data.getTime() - hoje.getTime();
    const diferencaDias = diferencaTempo / (1000 * 3600 * 24);
    return diferencaDias <= 2 && diferencaDias >= 0;
};