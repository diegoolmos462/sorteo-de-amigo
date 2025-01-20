// El leprincipal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);
    document.getElementById('amigo').value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para realizar el sorteo.');
        return;
    }
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    let li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultado.appendChild(li);
}
