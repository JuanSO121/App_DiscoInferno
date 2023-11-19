function showContent(contentType) {
    // Desactiva todos los contenidos
    document.getElementById("reglas").style.display = "none";
    document.getElementById("elementos").style.display = "none";

    // Muestra el contenido seleccionado
    if (contentType === 'reglas') {
        document.getElementById("reglas").style.display = "block";
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
    showContent('reglas'); // Puedes cambiar esto a 'elementos' si deseas que el otro contenido esté activo inicialmente
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
