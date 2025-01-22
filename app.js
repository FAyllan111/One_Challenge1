//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaAmigos = [];


function adicionarAmigo() {
    let inputAmigos = document.getElementById("amigo");
    let amigos = inputAmigos.value.trim();

    if (amigos === "" ) {
        alert("Por favor, insira um nome.");
    } else {
        listaAmigos.push(amigos);
        inputAmigos.value = "";
    }

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        let listaOrdenada = document.createElement("li");
        listaOrdenada.textContent = amigo;
        lista.appendChild(listaOrdenada);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.")
        return;
    }

    let tamanhoArray = listaAmigos.length;
    let numerosArray = Math.floor(Math.random() * tamanhoArray);
    let amigoSorteado = listaAmigos[numerosArray];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Seu amigo secreto é: ${amigoSorteado}</li>`;
    limparLista();
}

function limparLista() {
    listaAmigos = [];
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
}