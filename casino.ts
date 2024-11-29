import readlineSync from 'readline-sync';
import { Cliente } from './cliente';
import { Juego } from './Juego';

export class Casino {
    private cliente: Cliente | null = null; // Inicializado como null
    private juegos: Juego[] = [];

    public registrarJuego(juego: Juego): void {
        this.juegos.push(juego);
    }

    public iniciar() {
        console.log("Bienvenido al Casino!");
        const nombre = readlineSync.question("Indicanos tu nombre: ");
        const saldoInicial = readlineSync.questionInt('Introduce tu saldo inicial: ');
        this.cliente = new Cliente(nombre, saldoInicial);

        let juegoActual: Juego | null = null;

        while (true) {
            if (!juegoActual) {
                console.log('\n--- Menú del Casino ---');
                this.juegos.forEach((juego, index) => {
                    console.log(`${index + 1}. ${juego.nombre}`);
                });
                console.log('0. Salir');
                const opcion = readlineSync.questionInt('Elige un juego: ');

                if (opcion === 0) {
                    console.log('Gracias por jugar. ¡Hasta la próxima!');
                    return;
                }

                juegoActual = this.juegos[opcion - 1];
                if (!juegoActual) {
                    console.log('Opción inválida.');
                    continue;
                }
            }

            this.jugarJuego(juegoActual);
            const continuar = readlineSync.question('¿Deseas seguir jugando al mismo juego? (s/n): ');
            if (continuar.toLowerCase() !== 's') {
                juegoActual = null;
            }
        }
    }

    private jugarJuego(juego: Juego) {
        if (!this.cliente) {
            console.log('No hay cliente registrado.');
            return;
        }

        const apuesta = readlineSync.questionInt('Introduce tu apuesta: ');
        juego.jugar(this.cliente, apuesta);
    }
}
