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

function main() {
    while (true) {
        console.log("\nCalculadora: Seleccione una opción");
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación");
        console.log("4. División");
        console.log("5. Salir");
        
        let opcion = prompt("Ingrese el número de la operación:");
        
        if (opcion === "5") {
            console.log("Hasta la próxima");
            break;
        }
        
        if (["1", "2", "3", "4"].includes(opcion)) {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Error: Ingrese solo números válidos");
                continue;
            }
            
            switch (opcion) {
                case "1":
                    console.log("Resultado:", suma(num1, num2));
                    break;
                case "2":
                    console.log("Resultado:", resta(num1, num2));
                    break;
                case "3":
                    console.log("Resultado:", multiplicacion(num1, num2));
                    break;
                case "4":
                    console.log("Resultado:", division(num1, num2));
                    break;
            }
        } else {
            console.log("Opción inválida, intente de nuevo");
        }
    }
}

main();