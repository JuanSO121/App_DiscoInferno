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
