import { Tragamonedas } from "./tragamonedas";

export class TragamonedasEgipto extends Tragamonedas {
    private simbolosClasicos: string[];
  
    constructor(nombre: string, cantidadSimbolos: number, apuestaMinima: number, apuestaMaxima: number) {
        super(nombre, cantidadSimbolos, apuestaMinima, apuestaMaxima);
        this.simbolosClasicos = ['Pirámide', 'Momia', 'Faraón', 'Gato'];
    }
  
    protected generarResultado(): string[] {
        return Array.from({ length: this.cantidadSimbolos }, () => {
            const indiceAleatorio = Math.floor(Math.random() * this.simbolosClasicos.length);
            return this.simbolosClasicos[indiceAleatorio];
        });
    }
  
    public obtenerPremio(resultado: string[], apuesta: number): number {
        return resultado.every(simbolo => simbolo === resultado[0]) ? apuesta * 10 : 0;
    }
  }