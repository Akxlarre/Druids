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
});

// validar formulario registro
$(document).ready(function () {

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

    $("#formulario-registro").validate({
        rules: {
            "usuario-registro": {
                required: true,
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
                required: "Por favor ingresa un nombre de usuario"
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
