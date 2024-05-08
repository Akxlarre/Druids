$(document).ready(function () {
    $("#precio-Producto").on('input', function () {
        var valor = $(this).val();
        // Eliminar todos los caracteres que no sean dígitos
        valor = valor.replace(/\D/g, '');
        // Convertir el valor a número
        var numero = parseInt(valor);
        if (isNaN(numero) || valor === '') {
            // Establecer el valor del campo como una cadena vacía
            $(this).val('');
        } else {
            // Formatear el número con separadores de miles y agregar el signo "$"
            var montoFormateado = "$" + numero.toLocaleString('es-CL');
            // Actualizar el valor del campo con el monto formateado
            $(this).val(montoFormateado);
        }
    });
});
$(document).ready(function () {
    $("#stock-Producto").on('input', function () {
        var valor = $(this).val();
        // Eliminar todos los caracteres que no sean dígitos
        valor = valor.replace(/\D/g, '');
        // Convertir el valor a número
        var numero = parseInt(valor);
        if (isNaN(numero) || valor === '') {
            // Establecer el valor del campo como una cadena vacía
            $(this).val('');
        } else {
            // Actualizar el valor del campo con el monto formateado
            $(this).val(numero);
        }
    });
});

$(document).ready(function () {
    $("#precio-Producto-Editar").on('input', function () {
        var valor = $(this).val();
        // Eliminar todos los caracteres que no sean dígitos
        valor = valor.replace(/\D/g, '');
        // Convertir el valor a número
        var numero = parseInt(valor);
        if (isNaN(numero) || valor === '') {
            // Establecer el valor del campo como una cadena vacía
            $(this).val('');
        } else {
            // Formatear el número con separadores de miles y agregar el signo "$"
            var montoFormateado = "$" + numero.toLocaleString('es-CL');
            // Actualizar el valor del campo con el monto formateado
            $(this).val(montoFormateado);
        }
    });
});
$(document).ready(function () {
    $("#stock-Producto-Editar").on('input', function () {
        var valor = $(this).val();
        // Eliminar todos los caracteres que no sean dígitos
        valor = valor.replace(/\D/g, '');
        // Convertir el valor a número
        var numero = parseInt(valor);
        if (isNaN(numero) || valor === '') {
            // Establecer el valor del campo como una cadena vacía
            $(this).val('');
        } else {
            // Actualizar el valor del campo con el monto formateado
            $(this).val(numero);
        }
    });
});