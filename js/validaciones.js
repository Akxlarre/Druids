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

// validar formulario contacto

$(document).ready(function () {
    $("#formulario-contacto").validate({
        rules: {
            "nombre-contacto": {
                required: true,
                minlength: 3,
                noEspacios: true,
            },
            "email-contacto": {
                required: true,
                email: true,
                emailConDominio: true,
            },
            "mensaje-contacto": {
                required: true,
                minlength: 150,
            }
        },
        messages: {
            "nombre-contacto": {
                required: "Por favor ingresa tu nombre",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },
            "email-contacto": {
                required: "Por favor ingresa tu correo electrónico",
                email: "Por favor ingresa un correo electrónico válido"
            },
            "mensaje-contacto": {
                required: "Por favor ingresa un mensaje",
                minlength: "El mensaje debe tener al menos 150 caracteres"
            }
        }
    });
});

//validar formulario Pago
$(document).ready(function () {
    $("#formulario-pago").validate({
        rules: {
            "nombre-pago": {
                required: true,
                minlength: 3,
                noEspacios: true,
            },
            "apellido-pago": {
                required: true,
                minlength: 3,
                noEspacios: true,
            },
            "email-pago": {
                required: true,
                email: true,
                emailConDominio: true,
            },
            "direccion-pago": {
                required: true,
                minlength: 10,
            },
            "numero-Tarjeta": {
                required: true,
                creditcard: true,
            },
            "fecha-Vencimiento": {
                required: true,
            },
            "cvv": {
                required: true,
                minlength: 3,
            },
            "nombre-titular": {
                required: true,
                minlength: 3,
                noEspacios: true,
            },
            "rut-titular": {
                required: true,
            },
        },
        messages: {
            "nombre-pago": {
                required: "Por favor ingresa tu nombre",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },
            "apellido-pago": {
                required: "Por favor ingresa tu apellido",
                minlength: "El apellido debe tener al menos 3 caracteres"
            },
            "email-pago": {
                required: "Por favor ingresa tu correo electrónico",
                email: "Por favor ingresa un correo electrónico válido"
            },
            "direccion-pago": {
                required: "Por favor ingresa tu dirección",
                minlength: "La dirección debe tener al menos 10 caracteres"
            },
            "numero-Tarjeta": {
                required: "Por favor ingresa tu número de tarjeta",
                creditcard: "Por favor ingresa un número de tarjeta válido"
            },
            "fecha-Vencimiento": {
                required: "Por favor ingresa la fecha de vencimiento de tu tarjeta"
            },
            "cvv": {
                required: "Por favor ingresa el CVV de tu tarjeta",
                minlength: "El CVV debe tener al menos 3 caracteres"
            },
            "nombre-titular": {
                required: "Por favor ingresa el nombre del titular de la tarjeta",
                minlength: "El nombre del titular debe tener al menos 3 caracteres"
            },
            "rut-titular": {
                required: "Por favor ingresa el RUT del titular de la tarjeta"
            }
        }
    });
});


