function showContent(contentType) {
    // Desactiva todos los contenidos
    document.getElementById("instrucciones").style.display = "none";
    document.getElementById("elementos").style.display = "none";

    // Muestra el contenido seleccionado
    if (contentType === 'instrucciones') {
        document.getElementById("instrucciones").style.display = "block";
    } else if (contentType === 'elementos') {
        document.getElementById("elementos").style.display = "block";
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