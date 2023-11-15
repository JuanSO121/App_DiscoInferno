function showMessage(message) {
    // Cambiar el contenido del modal
    document.getElementById('modal-body').innerHTML = message;

    // Mostrar el modal
    $('#myModal').modal('show');
}

function showContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

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
