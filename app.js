//CHALLENGE DEL AMIGO SECRETO 
let nombresParticipantes = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function inicializarJuego() {
    asignarTextoElemento('.main-title', 'Juego del Amigo Secreto');
    asignarTextoElemento('.section-title', 'Escriba los nombres de los participantes');
    document.getElementById('resultado').innerHTML = '';
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    const regex = /\d/;
    console.log()

    let validar = regex.test(nombre);

    if (validar) {
        alert("ESTO TIENE NUMERO")
    }
    else if (nombre.length == 0) {
        alert("eL CAMPO NO PUEDE ESTAR VACIO");
    } 
    else if (nombre !== '' && !nombresParticipantes.includes(nombre)) {
        nombresParticipantes.push(nombre);
        limpiarCaja();
        mostrarNombresEnLista();
    }
    
}

function sortearAmigo() {
    if (nombresParticipantes.length < 2) {
        asignarTextoElemento('#resultado', 'Debes agregar al menos 2 participantes para sortear.');
        return;
    }
    
    // Elegir un nombre aleatorio de la list
    let indiceAleatorio = Math.floor(Math.random() * nombresParticipantes.length);
    let nombreSorteado = nombresParticipantes[indiceAleatorio];

    // Mostrar solo el nombre sorteado
    asignarTextoElemento('#resultado', `¡El amigo secreto es: ¡${nombreSorteado}! 🎉`);
}

function mostrarNombresEnLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    nombresParticipantes.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    nombresParticipantes = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    inicializarJuego();
}

// Inicializa el juego cuando la página carga
inicializarJuego();
