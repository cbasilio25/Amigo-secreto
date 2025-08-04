// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Evitar nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    mostrarListaAmigos();
    input.value = "";
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Eliminar al amigo sorteado del array
    amigos.splice(indiceAleatorio, 1);

    // Mostrar el nombre sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    // Actualizar la lista visible
    mostrarListaAmigos();
}
function reiniciarTodo() {
    // Vaciar el array
    amigos = [];

    // Limpiar lista en pantalla
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpiar resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    alert("Lista de amigos y resultado reiniciados.");
}