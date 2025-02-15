function listaDeCompras() {
    let lista = {
        "Frutas": [],
        "Lácteos": [],
        "Congelados": [],
        "Dulces": [],
        "Otros": []
    };

    while (true) {
        let agregar = prompt("¿Deseas agregar un alimento a la lista de compras? (sí/no)").trim().toLowerCase();
        
        if (agregar === "no") break; // Solo rompe el bucle si se responde "no"

        if (agregar !== "sí") {
            alert("Por favor, responde 'sí' o 'no'.");
            continue; // Vuelve a preguntar si la respuesta no es válida
        }

        let alimento = prompt("¿Qué alimento deseas agregar?").trim();
        let categoria = prompt("¿En qué categoría encaja este alimento? (Frutas, Lácteos, Congelados, Dulces, Otros)").trim();

        if (lista[categoria]) {
            lista[categoria].push(alimento);
        } else {
            alert("Categoría no válida. Se agregará a 'Otros'.");
            lista["Otros"].push(alimento);
        }
    }

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Lista de compras:</h2>";
    for (let categoria in lista) {
        if (lista[categoria].length > 0) {
            resultadoDiv.innerHTML += `<p><strong>${categoria}:</strong> ${lista[categoria].join(", ")}</p>`;
        }
    }
}
