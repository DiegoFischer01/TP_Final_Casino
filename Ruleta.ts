const readline = require ('readline-sync'); 

let saldo = 100; //dinero inicial del jugador
console.log("Bienvenido a la Ruleta. Tu saldo inicial es $100.");
while (saldo > 0) {
    console.log("Escribe un número entre 1 y 10, o 'salir' para terminar:");

   //preguntar por la apuesta
    const apuesta = readline.question();
    if (apuesta === 'salir') break;

    // preguntar cuanto el jugador desea apostar

    const monto = parseInt(readline.question("¿Cuánto quieres apostar? "));
    if (monto > saldo || monto <= 0) {
        console.log("Monto inválido.");
        continue;
    }
    // generar un numero ganador

    const numeroElegido = parseInt(apuesta);
    const resultado = Math.floor(Math.random() * 10) + 1;
    console.log(El número ganador es: ${resultado});

    // verificar si el jugador gano o perdio
    if (numeroElegido === resultado) { 
        saldo += monto * 10;
        console.log(¡Ganaste! Nuevo saldo: $${saldo});
    } else {
        saldo -= monto;
        console.log(Perdiste. Nuevo saldo: $${saldo});
    }
}
console.log("Juego terminado. Saldo final: $" + saldo);