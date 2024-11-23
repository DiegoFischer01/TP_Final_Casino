import { Cliente } from "./cliente";
import { Juego } from "./juego";

export abstract class Tragamonedas extends Juego {
    protected cantidadSimbolos: number;
    protected apuestaMinima: number;
    protected apuestaMaxima: number;

    constructor(nombre: string, cantidadSimbolos: number, apuestaMinima: number, apuestaMaxima: number) {
        super(nombre);
        this.cantidadSimbolos = cantidadSimbolos;
        this.apuestaMinima = apuestaMinima;
        this.apuestaMaxima = apuestaMaxima;
    }

    public jugar(cliente: Cliente, apuesta: number): void {
        if (apuesta < this.apuestaMinima || apuesta > this.apuestaMaxima) {
            console.log(`La apuesta debe estar entre ${this.apuestaMinima} y ${this.apuestaMaxima}.`);
            return;
        }

        if (apuesta > cliente.saldo) {
            console.log(`Saldo insuficiente para realizar la apuesta.`);
            return;
        }

        cliente.descontarSaldo(apuesta);
        const resultado = this.girar();
        const premio = this.obtenerPremio(resultado, apuesta);
        cliente.agregarSaldo(premio);

        console.log(`Resultado: ${resultado.join(', ')}`);
        if (premio > 0) {
            console.log(`¡Felicidades! Has ganado ${premio}.`);
        } else {
            console.log(`Has perdido la apuesta de ${apuesta}.`);
        }
        console.log(`Saldo actual: ${cliente.saldo}`);
    }

    protected abstract girar(): string[];
    public abstract obtenerPremio(resultado: string[], apuesta: number): number;
}
