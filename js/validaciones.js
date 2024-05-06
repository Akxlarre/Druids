// validar formulario inicio de sesion
$(document).ready(function () {
    $("#formulario-inicio-sesion").validate({
        rules: {
            "usuario-inicio-sesion": {
                required: true,
            },
            "password-inicio-sesion": {
                required: true,
            }
        },
        messages: {
            "usuario-inicio-sesion": {
                required: "Por favor ingresa un nombre de usuario"
            },
            "password-inicio-sesion": {
                required: "Por favor ingresa una contraseña"
            }
        }
    });
    $("#formulario-inicio-sesion").submit(function () {
        if ($("#formulario-inicio-sesion").valid()) {
            $("#boton-inicio-sesion").hide();
        }
    });
});

// requerimientos de la contraseña
$(document).ready(function() {
    $('#password-registro').on('input blur', function() {
        var password = $(this).val();
        var longitudRegex = /^.{8,}$/;
        var mayusculaRegex = /[A-Z]/;
        var minusculaRegex = /[a-z]/;
        var numeroRegex = /\d/;
        var especialRegex = /[^\da-zA-Z]/;

        // Función para verificar si un requisito está cumplido y cambiar la clase de color
        function verificarRequisito(regex, elemento) {
            if (regex.test(password)) {
                elemento.removeClass('text-danger').addClass('text-success');
                elemento.find('.validador').attr('src', 'img/complete-svgrepo-com.svg');
                } else {
                elemento.removeClass('text-success').addClass('text-danger');
                elemento.find('.validador').attr('src', 'img/empty-svgrepo-com.svg');
            }
        }

        // Verificar cada requisito y cambiar clase de color según corresponda
        verificarRequisito(longitudRegex, $('#requerimiento-longitud'));
        verificarRequisito(mayusculaRegex, $('#requerimiento-mayuscula'));
        verificarRequisito(minusculaRegex, $('#requerimiento-minuscula'));
        verificarRequisito(numeroRegex, $('#requerimiento-numero'));
        verificarRequisito(especialRegex, $('#requerimiento-especial'));
    });
});

//nuevos metodos de validacion
$.validator.addMethod("noEspacios", function(value, element) {
    return this.optional(element) || !/\s/.test(value);
}, "El nombre de usuario no puede contener espacios");

$.validator.addMethod("strongPassword", function (value, element) {
    // Expresiones regulares para validar los criterios de la contraseña
    var longitudRegex = /^.{8,}$/; // Al menos 8 caracteres de longitud
    var mayusculaRegex = /[A-Z]/; // Al menos una letra mayúscula
    var minusculaRegex = /[a-z]/; // Al menos una letra minúscula
    var numeroRegex = /\d/; // Al menos un número
    var especialRegex = /[^a-zA-Z\d]/; // Al menos un carácter especial

    // Verificar si el valor del campo de contraseña cumple con todos los criterios
    return this.optional(element) ||
        longitudRegex.test(value) &&
        mayusculaRegex.test(value) &&
        minusculaRegex.test(value) &&
        numeroRegex.test(value) &&
        especialRegex.test(value);
}, "La contraseña debe cumplir con los requerimientos");

$.validator.addMethod("emailConDominio", function (value, element) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.optional(element) || emailRegex.test(value);
}, "Por favor ingresa un correo electrónico válido");

// validar formulario registro
$(document).ready(function () {

    $("#formulario-registro").validate({
        rules: {
            "usuario-registro": {
                required: true,
                minlength: 3,
                noEspacios: true,
            },
            "email-registro": {
                required: true,
                email: true,
                emailConDominio: true,
            },
            "password-registro": {
                required: true,
                strongPassword: true,
            },
            "password-registro-confirmar": {
                required: true,
                equalTo: "#password-registro"
            },
        },
        messages: {
            "usuario-registro": {
                required: "Por favor ingresa un nombre de usuario",
                minlength: "El nombre de usuario debe tener al menos 3 caracteres"
            },
            "email-registro": {
                required: "Por favor ingresa tu correo electrónico",
                email: "Por favor ingresa un correo electrónico válido"
            },
            "password-registro": {
                required: "Por favor ingresa una contraseña",
                minlength: "La contraseña debe tener al menos 8 caracteres"
            },
            "password-registro-confirmar": {
                required: "Por favor confirma tu contraseña",
                equalTo: "Las contraseñas no coinciden"
            }
        }
    });

});

$(document).ready(function () {
    $("#form-pago").validate({
        rules: {
            "Primer-nombre-pago": {
                required: true,
                minlength: 3,
                noEspacios: true,
            },
            "Apellido-pago": {
                required: true,
                minlength: 3,
                noEspacios: true,
            },
            "Email-pago": {
                required: true,
                email: true,
                emailConDominio: true,
            },
            "Direccion-pago": {
                required: true,
            },
            "Region": {
                required: true,
            },
        },
        messages: {
            "Primer-nombre-pago": {
                required: "Por favor ingresa tu nombre",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },
            "Apellido-pago": {
                required: "Por favor ingresa tu apellido",
                minlength: "El apellido debe tener al menos 3 caracteres"
            },
            "Email-pago": {
                required: "Por favor ingresa tu correo electrónico",
                email: "Por favor ingresa un correo electrónico válido"
            },
            "Direccion-pago": {
                required: "Por favor ingresa tu dirección",
            },
            "Region": {
                required: "Por favor selecciona una región",
            }
        }
    });
});

