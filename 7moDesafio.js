function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return b !== 0 ? a / b : "Error: División por cero";
}

function iniciarCalculadora() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir");
        
        if (opcion === "5") {
            alert("Hasta la próxima");
            return;
        }
        
        if (["1", "2", "3", "4"].includes(opcion)) {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            
            if (isNaN(num1) || isNaN(num2)) {
                alert("Error: Ingrese solo números válidos");
                continue;
            }
            
            let resultado;
            switch (opcion) {
                case "1":
                    resultado = suma(num1, num2);
                    break;
                case "2":
                    resultado = resta(num1, num2);
                    break;
                case "3":
                    resultado = multiplicacion(num1, num2);
                    break;
                case "4":
                    resultado = division(num1, num2);
                    break;
            }
            alert("Resultado: " + resultado);
        } else {
            alert("Opción inválida, intente de nuevo");
        }
    } while (opcion !== "5");
}
