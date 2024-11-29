
import readlineSync from 'readline-sync';
import { Cliente } from './cliente';
import { TragamonedasEgipto } from './tragamonedasEgipto';
import { TragamonedasAnimal } from './tragamonedasAnimal'; 
import { Juego } from './juego';

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

        while (true) {
            console.log('\n--- Menú del Casino ---');
            this.juegos.forEach((juego, index) => {
                console.log(`${index + 1}. ${juego['nombre']}`);
            });
            console.log('0. Salir');
            const opcion = readlineSync.questionInt('Elige un juego: ');

            if (opcion === 0) {
                console.log('Gracias por jugar. ¡Hasta la próxima!');
                return;
            }

            const juego = this.juegos[opcion - 1];
            if (juego) {
                this.jugarJuego(juego);
            } else {
                console.log('Opción inválida.');
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


