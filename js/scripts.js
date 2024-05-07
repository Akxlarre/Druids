
$(document).ready(function() {

    $('.ocultar-pass').hide();
    // Mostrar y ocultar contraseña
    $('#ver-contrasena').click(function() {
        var tipo = $('#password-registro').attr('type');
        if (tipo == 'password') {
            $('#password-registro').attr('type', 'text');
            $('.mostrar-pass').hide();
            $('.ocultar-pass').show();
        } else {
            $('#password-registro').attr('type', 'password');
            $('.ocultar-pass').hide();
            $('.mostrar-pass').show();
        }
    });
});

$(document).ready(function() {
    $('.ocultar-repass').hide();
    // Mostrar y ocultar contraseña
    $('#ver-contrasena-confirmar').click(function() {
        var tipo = $('#password-registro-confirmar').attr('type');
        if (tipo == 'password') {
            $('#password-registro-confirmar').attr('type', 'text');
            $('.mostrar-repass').hide();
            $('.ocultar-repass').show();
        } else {
            $('#password-registro-confirmar').attr('type', 'password');
            $('.ocultar-repass').hide();
            $('.mostrar-repass').show();
        }
    });
});


