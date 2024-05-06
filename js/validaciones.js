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

$.validator.addMethod("seleccionDropdown", function (value, element) {
    return value != "0";
}, "Por favor selecciona una opción");

$.validator.addMethod("mesValido", function (value, element) {
    var mes = value.substring(0, 2);
    return mes >= '01' && mes <= '12';
}, "Por favor ingresa un mes válido");

$.validator.addMethod("añoValido", function (value, element) {
    var hoy = new Date();
    var añoActual = hoy.getFullYear().toString().slice(-2);
    var añoIngresado = value.substring(3, 5);
    return añoIngresado >= añoActual;
}, "Por favor ingresa un año válido");

// Función para validar el número de tarjeta  utilizando el algoritmo de Luhn
function luhnCheck(value) {
    // Eliminar espacios en blanco y guiones del número de tarjeta
    var cardNumber = value.replace(/\s+/g, '').replace(/-/g, '');

    // Convertir el número de tarjeta a un array de dígitos
    var cardDigits = cardNumber.split('').map(Number);

    // Calcular la suma de control utilizando el algoritmo de Luhn
    var sum = 0;
    var doubleUp = false;
    for (var i = cardDigits.length - 1; i >= 0; i--) {
        var digit = cardDigits[i];
        if (doubleUp) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        doubleUp = !doubleUp;
    }

    // La tarjeta de crédito es válida si la suma de control es divisible por 10
    return sum % 10 === 0;
}
$.validator.addMethod('validarTarjeta', function(value, element) {
    // Utilizar la función luhnCheck para validar el número de tarjeta de crédito
    return luhnCheck(value);
}, 'Por favor ingresa un número de tarjeta de crédito válido.');

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
                email: true,
                emailConDominio: true,
            },
            "Direccion-pago": {
                required: true,
            },
            "Region": {
                required: true,
                seleccionDropdown: true,
            },
            "comuna": {
                required: true,
                seleccionDropdown: true,
            },
            "zip": {
                required: true,
                digits: true,
                minlength: 7,
                maxlength: 7,
            },
            "metodo-pago": {
                required: true,
            },
            "Nombre-titular": {
                required: true,

            },
            "Numero-tarjeta": {
                required: true,
                validarTarjeta: true,
                minlength: 19,
            },
            "Fecha-expiracion": {
                required: true,
                mesValido: true,
                añoValido: true,
                minlength: 5,
                maxlength: 5,
            },
            "cvv": {
                required: true,
                digits: true,
                minlength: 3,
                maxlength: 3,
            }
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
            },
            "comuna": {
                required: "Por favor selecciona una comuna",
            },
            "zip": {
                required: "Por favor ingresa tu código postal",
                digits: "El código postal debe ser un número",
                minlength: "El código postal debe tener 7 caracteres",
                maxlength: "El código postal debe tener 7 caracteres",
            },
            "metodo-pago": {
                required: "Por favor selecciona un método de pago",
            },
            "Nombre-titular": {
                required: "Por favor ingresa el nombre del titular de la tarjeta",
            },
            "Numero-tarjeta": {
                required: "Por favor ingresa el número de tarjeta",
                minlength: "El número de tarjeta debe tener 16 digitos",
                validarTarjeta: "Por favor ingresa un número de tarjeta válido",
                
            },
            "Fecha-expiracion": {
                required: "Por favor ingresa la fecha de expiración",
                mesValido: "Por favor ingresa un mes válido",
                añoValido: "Por favor ingresa un año válido",
                minlength: "Por favor ingresa la fecha de expiración en el formato MM/YY",
                maxlength: "Por favor ingresa la fecha de expiración en el formato MM/YY",
            },
            "cvv": {
                required: "Por favor ingresa el CVV",
                digits: "El CVV debe ser un número",
                minlength: "El CVV debe tener al menos 3 caracteres",
                maxlength: "El CVV debe tener como máximo 3 caracteres",
            }
        }
    });
});

