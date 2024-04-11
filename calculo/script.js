// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para calcular la operación seleccionada por el usuario
function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    var resultado;
    if (operation === "sumar") {
        resultado = sumar(num1, num2);
    } else if (operation === "restar") {
        resultado = restar(num1, num2);
    } else {
        resultado = "Operación no válida";
    }

    document.getElementById('output').innerText = "El resultado es: " + resultado;
}

