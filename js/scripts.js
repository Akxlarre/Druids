
$(document).ready(function() {
    $('#ver-contrasena').click(function() {
        var tipo = $('#password-registro').attr('type');
        if (tipo == 'password') {
            $('#password-registro').attr('type', 'text');
            $(this).text('Ocultar contraseña');
        } else {
            $('#password-registro').attr('type', 'password');
            $(this).text('Ver contraseña');
        }
    });
});