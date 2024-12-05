import { Juego } from './Juego';
import { Cliente } from './cliente';

export class Ruleta implements Juego {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public jugar(cliente: Cliente, apuesta: number): void {
        if (apuesta > cliente.saldo || apuesta <= 0) {
            console.log("Monto invalido.");
            return;
        }

        const numeroElegido = this.preguntarNumero();
        const resultado = Math.floor(Math.random() * 10) + 1;
        console.log(`El numero ganador es: ${resultado}`);

        if (numeroElegido === resultado) {
            cliente.agregarSaldo(apuesta * 10);
            console.log(`¡Ganaste! Nuevo balance: $${cliente.saldo}`);
        } else {
            cliente.descontarSaldo(apuesta);
            console.log(`¡Perdiste! Nuevo balance: $${cliente.saldo}`);
        }

        const seguirJugando = this.preguntarSeguirJugando();
        if (seguirJugando) {
            this.jugar(cliente, apuesta);
        }
    }

    private preguntarNumero(): number {
        const readlineSync = require('readline-sync');
        const numero = readlineSync.questionInt("Escribe un numero entre 1 y 10: ");
        return numero;
    }

    private preguntarSeguirJugando(): boolean {
        const readlineSync = require('readline-sync');
        const respuesta = readlineSync.question('Deseas seguir jugando? (s/n): ');
        return respuesta.toLowerCase() === 's';
    }
}

