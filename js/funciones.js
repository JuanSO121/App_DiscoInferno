function showContent(contentType) {
    // Desactiva todos los contenidos
    document.getElementById("instrucciones").style.display = "none";
    document.getElementById("elementos").style.display = "none";
    document.getElementById("pensamientos").style.display = "none";

    // Muestra el contenido seleccionado
    if (contentType === 'instrucciones') {
        document.getElementById("instrucciones").style.display = "block";
    } else if (contentType === 'elementos') {
        document.getElementById("elementos").style.display = "block";
    } else if (contentType === 'pensamientos') {
        document.getElementById("pensamientos").style.display = "block";
    }
}

function showMessage(contentType) {
    // Aquí puedes realizar acciones específicas al hacer clic en un mensaje si es necesario
    // Por ahora, solo activamos el contenido correspondiente
    showContent(contentType);
}

// Añade este evento al cargar la página para asegurarte de que uno de los contenidos esté visible
window.onload = function () {
    showContent('instrucciones'); // Puedes cambiar esto a 'elementos' si deseas que el otro contenido esté activo inicialmente
};

function showElement(elementName, elementDescription, elementImage) {
    // Construir el contenido del modal con información detallada del elemento seleccionado
    var modalContent = `
        <img src="${elementImage}" class="img-fluid" alt="${elementName}">
        <h5>${elementName}</h5>
        <p>${elementDescription}</p>
    `;

    // Cambiar el contenido del modal
    document.getElementById('modal-body').innerHTML = modalContent;

    // Mostrar el modal
    $('#myModal').modal('show');
}
// ... Funciones existentes ...

// Contador de vidas
let vidas = 6;



function actualizarVidas() {
    const vidasContainer = document.getElementById('vidas-container');
    vidasContainer.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const corazon = document.createElement('img');
        corazon.classList.add('corazon-img');
        if (i < vidas) {
            corazon.src = './img/corazon.png'; // Imagen de corazón
        } else {
            corazon.src = './img/corazon_roto.png'; // Imagen de corazón roto
        }
        vidasContainer.appendChild(corazon);
    }
}

// Función para cambiar la cantidad de vidas
function cambiarVidas(cantidad) {
    vidas += cantidad;
    // Asegurarse de que vidas no sea menor que 0 o mayor que 6
    vidas = Math.max(0, Math.min(6, vidas));
    actualizarVidas();
}

// Funciones específicas para perder y recuperar vidas con cantidad configurable
function perderVida(cantidad) {
    cambiarVidas(-cantidad);
}

function recuperarVida(cantidad) {
    cambiarVidas(+cantidad);  // Cambiar el signo a positivo
}


// Inicializar el contador de vidas al cargar la página
actualizarVidas();


// Contador de sanidad
let sanidad = 6;



function actualizarSanidad() {
    const sanidadContainer = document.getElementById('sanidad-container');
    sanidadContainer.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const cerebro = document.createElement('img');
        cerebro.classList.add('cerebro-img');
        if (i < sanidad) {
            cerebro.src = './img/sanidad.png'; // Imagen de corazón
        } else {
            cerebro.src = './img/sanidad_rota.png'; // Imagen de corazón roto
        }
        sanidadContainer.appendChild(cerebro);
    }
}

// Función para cambiar la cantidad de Sanidad
function cambiarSanidad(cantidad) {
    sanidad += cantidad;
    // Asegurarse de que Sanidad no sea menor que 0 o mayor que 6
    sanidad = Math.max(0, Math.min(6, sanidad));
    actualizarSanidad();
}

// Funciones específicas para perder y recuperar Sanidad con cantidad configurable
function perderSanidad(cantidad) {
    cambiarSanidad(-cantidad);
}

function recuperarSanidad(cantidad) {
    cambiarSanidad(+cantidad);  // Cambiar el signo a positivo
}


// Inicializar el contador de Sanidad al cargar la página
actualizarSanidad();

        let creditos = 0;

        function actualizarCreditos() {
            const creditoCount = document.getElementById('credito-count');
            creditoCount.textContent = creditos;
        }

        // Función para cambiar la cantidad de créditos
        function cambiarCreditos(cantidad) {
            creditos += cantidad;
            // Asegurarse de que los créditos no sean negativos
            creditos = Math.max(0, creditos);
            actualizarCreditos();
        }

        // Funciones específicas para perder y recuperar créditos con cantidad configurable
        function perderCreditos(cantidad) {
            cambiarCreditos(-cantidad);
        }

        function recuperarCreditos(cantidad) {
            cambiarCreditos(+cantidad);  // Cambiar el signo a positivo
        }

        // Inicializar el contador de créditos al cargar la página
        actualizarCreditos();

// En tu archivo funciones.js

// function agregarCarta() {

//     var tipoCarta = document.getElementById("tipoCarta").value;
//     var nombreCarta = document.getElementById("nombreCarta").value;
//     var valorVida = parseInt(document.getElementById("valorVida").value);
//     var valorSanidad = parseInt(document.getElementById("valorSanidad").value);
//     var valorCreditos = parseInt(document.getElementById("valorCreditos").value);

 
//     var historialLista = document.getElementById("historial-lista");
//     var nuevaCarta = document.createElement("li");
//     nuevaCarta.className = "list-group-item";
//     nuevaCarta.textContent = `${tipoCarta} - ${nombreCarta} | Vida: +${valorVida}, Sanidad: +${valorSanidad}, Créditos: +${valorCreditos}`;
//     historialLista.appendChild(nuevaCarta);


//     document.getElementById("tipoCarta").value = "item";
//     document.getElementById("nombreCarta").value = "";
//     document.getElementById("valorVida").value = 1;
//     document.getElementById("valorSanidad").value = 1;
//     document.getElementById("valorCreditos").value = 1;
// }
