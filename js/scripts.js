
$(document).ready(function() {
    $('#ver-contrasena').click(function() {
        var tipo = $('#password-registro').attr('type');
        if (tipo == 'password') {
            $('#password-registro').attr('type', 'text');
            $('.icono-mostrar').hide();
            $('.icono-ocultar').show();
        } else {
            $('#password-registro').attr('type', 'password');
            $('.icono-ocultar').hide();
            $('.icono-mostrar').show();
        }
    });
});