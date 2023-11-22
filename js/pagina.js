function showContent(contentType) {
    // Desactiva todos los contenidos
    document.getElementById("reglas").style.display = "none";
    document.getElementById("elementos").style.display = "none";
    document.getElementById("historia").style.display = "none";

    // Muestra el contenido seleccionado
    if (contentType === 'reglas') {
        document.getElementById("reglas").style.display = "block";
    } else if (contentType === 'elementos') {
        document.getElementById("elementos").style.display = "block";
    } else if (contentType === 'historia') {
        document.getElementById("historia").style.display = "block";
    }
}

function showMessage(contentType) {
    // Aquí puedes realizar acciones específicas al hacer clic en un mensaje si es necesario
    // Por ahora, solo activamos el contenido correspondiente
    showContent(contentType);
}

window.onload = function () {
    showContent('reglas'); 
};

function showElement(elementName, elementDescription, elementImage) {
    // Construir el contenido del modal con información detallada del elemento seleccionado
    var modalContent = `
        <img src="${elementImage}" class="img-fluid" alt="${elementName}">
        <hr></hr>
        <h5>${elementName}</h5>
        <p>${elementDescription}</p>
    `;

    // Cambiar el contenido del modal
    document.getElementById('modal-body').innerHTML = modalContent;

    // Mostrar el modal
    $('#myModal').modal('show');
}

// ... Otras funciones ...

// Función para iniciar el juego con un modal de confirmación
function iniciarJuego() {
    const confirmacionModal = $('#confirmacionModal');

    // Muestra el modal de confirmación
    confirmacionModal.modal('show');

    // Configura el botón de confirmar dentro del modal
    $('#btnConfirmar').on('click', function() {
        // Redirige a la página del juego
        window.location.href = 'juego.html'; // Cambia 'juego.html' con la ruta correcta
    });
}

