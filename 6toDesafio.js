function listaDeCompras() {
    let lista = {
        "Frutas": [],
        "Lácteos": [],
        "Congelados": [],
        "Dulces": [],
        "Otros": []
    };

    while (true) {
        let opciones = "¿Deseas agregar o eliminar un alimento de la lista de compras? (agregar/eliminar/no)";
        let accion = prompt(opciones).trim().toLowerCase();
        
        if (accion === "no") break;

        if (accion === "eliminar") {
            let elementosActuales = Object.values(lista).flat();
            if (elementosActuales.length === 0) {
                alert("No hay elementos en la lista para eliminar.");
                continue;
            }

            let elementosLista = elementosActuales.join(", ");
            let eliminar = prompt(`Lista actual: ${elementosLista}\n¿Qué alimento deseas eliminar?`).trim();
            
            let eliminado = false;
            for (let categoria in lista) {
                let index = lista[categoria].indexOf(eliminar);
                if (index !== -1) {
                    lista[categoria].splice(index, 1);
                    eliminado = true;
                    break;
                }
            }
            
            if (eliminado) {
                alert(`Se ha eliminado '${eliminar}' de la lista.`);
            } else {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
            continue;
        }

        if (accion !== "agregar") {
            alert("Por favor, responde 'agregar', 'eliminar' o 'no'.");
            continue;
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