$(document).ready(function () {

    $('#formulario-inicio-sesion').submit(function (event) {
        // Verificar la validez del formulario
        if (!$(this)[0].checkValidity()) {
            event.preventDefault(); // Evitar el envío del formulario
            event.stopPropagation(); // Detener la propagación del evento
        }

        // Agregar la clase 'was-validated' al formulario para aplicar estilos de validación de Bootstrap
        $(this).addClass('was-validated');
    });

});