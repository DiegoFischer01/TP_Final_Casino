import { Tragamonedas } from "./tragamonedas";

export class TragamonedasAnimal extends Tragamonedas {
    private animales: string[];

    constructor(nombre: string, cantidadSimbolos: number, apuestaMinima: number, apuestaMaxima: number) {
        super(nombre, cantidadSimbolos, apuestaMinima, apuestaMaxima);
        this.animales = ['Caballo', 'Tigre', 'Águila', 'Gorila'];
    }

    protected girar(): string[] {
        return Array.from({ length: this.cantidadSimbolos }, () => {
            const indiceAleatorio = Math.floor(Math.random() * this.animales.length);
            return this.animales[indiceAleatorio];
        });
    }

    public obtenerPremio(resultado: string[], apuesta: number): number {
        return resultado.every(simbolo => simbolo === resultado[0]) ? apuesta * 15 : 0;
    }
}
