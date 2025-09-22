const jugar = (eleccionJugador) => {
    const opciones = ["piedra", "papel", "tijera"];
    if (!opciones.includes(eleccionJugador)) {
        console.log("Opción inválida. Usa 'piedra', 'papel' o 'tijera'");
        return;
    }

    const eleccionCPU = opciones[Math.floor(Math.random() * 3)];
    console.log(`Tú: ${eleccionJugador} | CPU: ${eleccionCPU}`);

    if (eleccionJugador === eleccionCPU) {
        console.log("Empate!");
    } else if (
        (eleccionJugador === "piedra" && eleccionCPU === "tijera") ||
        (eleccionJugador === "papel" && eleccionCPU === "piedra") ||
        (eleccionJugador === "tijera" && eleccionCPU === "papel")
    ) {
        console.log("Ganaste!");
    } else {
        console.log("Perdiste!");
    }
}

console.log("Usa jugar('piedra'|'papel'|'tijera') en la consola para jugar.");
