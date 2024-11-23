
import readlineSync from 'readline-sync';
import { Cliente } from './cliente';
import { TragamonedasEgipto } from './tragamonedasEgipto';
import { TragamonedasAnimal } from './tragamonedasAnimal';

export class Casino {
    private cliente: Cliente | null = null; // Inicializado como null
    private juegos: Map<string, any>;

    constructor() {
        this.juegos = new Map();
    }

    public registrarJuego(nombre: string, juego: any): void {
        this.juegos.set(nombre, juego);
    }

    public iniciar() {
        console.log("Bienvenido al Casino!");
        const nombre = readlineSync.question("Indicanos tu nombre: ");
        const saldoInicial = readlineSync.questionInt('Introduce tu saldo inicial: ');
        this.cliente = new Cliente(nombre, saldoInicial);

        while (true) {
            console.log('\n--- Menú del Casino ---');
            console.log('1. Tragamonedas Egipto');
            console.log('2. Tragamonedas Animales');
            console.log('0. Salir');
            const opcion = readlineSync.questionInt('Elige un juego: ');

            switch (opcion) {
                case 1:
                    this.jugarJuego('Tragamonedas Egipto');
                    break;
                case 2:
                    this.jugarJuego('Tragamonedas Animales');
                    break;
                case 0:
                    console.log('Gracias por jugar. ¡Hasta la próxima!');
                    return;
                default:
                    console.log('Opción inválida.');
            }
        }
    }

    private jugarJuego(nombreJuego: string) {
        if (!this.cliente) {
            console.log('No hay cliente registrado.');
            return;
        }

        const juego = this.juegos.get(nombreJuego);
        if (!juego) {
            console.log(`El juego ${nombreJuego} no está registrado en el casino.`);
            return;
        }
        const apuesta = readlineSync.questionInt('Introduce tu apuesta: ');
        juego.jugar(this.cliente, apuesta);
    }
}

