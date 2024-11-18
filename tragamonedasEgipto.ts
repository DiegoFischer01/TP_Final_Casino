import { Tragamonedas } from "./tragamonedas";

export class TragamonedasEgipto extends Tragamonedas {
    private simbolosEgipcios: string[];
  
    constructor(nombre: string, cantidadSimbolos: number, apuestaMinima: number, apuestaMaxima: number) {
        super(nombre, cantidadSimbolos, apuestaMinima, apuestaMaxima);
        this.simbolosEgipcios = ['Pirámide', 'Momia', 'Faraón', 'Gato'];
    }
    

    //Array.from: devuelve un nuevo arreglo creado a partir de uno similiar que se le pasa como argumento.
    protected generarResultado(): string[] {
        return Array.from({ length: this.cantidadSimbolos }, () => {
            const indiceAleatorio = Math.floor(Math.random() * this.simbolosEgipcios.length);
            return this.simbolosEgipcios[indiceAleatorio];
        });
    }
    

    //.every: se usa para verificar  si todo los elementos del arreglo cumplen una condicion especifica.
    //En este caso, si todos los símbolos en el array resultado son iguales al primer símbolo.
    public obtenerPremio(resultado: string[], apuesta: number): number {
        return resultado.every(simbolo => simbolo === resultado[0]) ? apuesta * 10 : 0;
    }
  }