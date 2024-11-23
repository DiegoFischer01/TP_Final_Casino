import { Tragamonedas } from "./tragamonedas";

export class TragamonedasEgipto extends Tragamonedas {
    private simbolosEgipcios: string[];

    constructor(nombre: string, cantidadSimbolos: number, apuestaMinima: number, apuestaMaxima: number) {
        super(nombre, cantidadSimbolos, apuestaMinima, apuestaMaxima);
        this.simbolosEgipcios = ['Pirámide', 'Momia', 'Faraón', 'Gato'];
    }

    protected girar(): string[] {
        return Array.from({ length: this.cantidadSimbolos }, () => {
            const indiceAleatorio = Math.floor(Math.random() * this.simbolosEgipcios.length);
            return this.simbolosEgipcios[indiceAleatorio];
        });
    }

    public obtenerPremio(resultado: string[], apuesta: number): number {
        return resultado.every(simbolo => simbolo === resultado[0]) ? apuesta * 10 : 0;
    }
}
