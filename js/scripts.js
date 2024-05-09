
$(document).ready(function() {

    $('.ocultar-pass').hide();
    // Mostrar y ocultar contraseña
    $('#boton-ver-contraseña').click(function() {
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
    $('#boton-ver-contraseña-confirmar').click(function() {
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

$(document).ready(function() {
    var searchInput = $('#Direccion-pago');

    searchInput.on('focus', function() {
        var autocomplete = new google.maps.places.Autocomplete(searchInput[0], {
            types: ['geocode'], // Limita los resultados a lugares geográficos
            componentRestrictions: { country: 'cl' } // Limita los resultados a Chile
        });

        autocomplete.addListener('place_changed', function() {
            var place = autocomplete.getPlace();
        });
    });
});

$(document).ready(function() {
    // valor por defecto
    $('.cantidad').val(1);

    $('.cantidad').on('input', function() {
        var value = $(this).val();
        // Permitir solo números
        value = value.replace(/[^0-9]/g, '');
        // Limitar la cantidad a 99
        if (value.length > 2) {
            value = value.substr(0, 2);
        }
        // evitar que esté vacío
        if (value == '') {
            value = 1;
        }
        $(this).val(value);
    
    }
    );
} );