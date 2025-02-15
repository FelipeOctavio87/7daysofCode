function adivinarNumero() {
    // Paso 1: Definir un número predefinido entre 0 y 10 (puedes cambiarlo por un número aleatorio después)
    let numeroCorrecto = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10
    let intentos = 3;
    let adivinado = false;
    
    // Paso 2: Bucle para pedir intentos
    for (let i = 0; i < intentos; i++) {
        let intento = parseInt(prompt(`Intento ${i + 1}: Adivina el número entre 0 y 10:`));
        
        if (intento === numeroCorrecto) {
            alert("¡Felicidades! Adivinaste el número.");
            adivinado = true;
            break;
        } else {
            alert("Número incorrecto. Inténtalo de nuevo.");
        }
    }
    
    // Paso 3: Si no adivinó, mostrar el número correcto
    if (!adivinado) {
        alert(`Lo siento, no adivinaste. El número era ${numeroCorrecto}.`);
    }
}

// Llamar a la función para ejecutar el juego
adivinarNumero();
