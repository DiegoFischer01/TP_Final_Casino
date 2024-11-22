import { Tragamonedas } from "./tragamonedas";


export class tragamonedasAnimal extends Tragamonedas {
    private animales: string[];
  
    constructor(nombre: string, cantidadSimbolos: number, apuestaMinima: number, apuestaMaxima: number) {
        super(nombre, cantidadSimbolos, apuestaMinima, apuestaMaxima);
        this.animales = ['Caballo', 'Tigre', 'Aguila', 'Gorila'];
    }
    

    //Array.from: devuelve un nuevo arreglo creado a partir de uno similiar que se le pasa como argumento.
    protected generarResultado(): string[] {
        return Array.from({ length: this.cantidadSimbolos }, () => {
            const indiceAleatorio = Math.floor(Math.random() * this.animales.length);
            return this.animales[indiceAleatorio];
        });
    }

  
    
    //.every: se usa para verificar  si todo los elementos del arreglo cumplen una condicion especifica.
    //En este caso, si todos los símbolos en el array resultado son iguales al primer símbolo.
    public obtenerPremio(resultado: string[], apuesta: number): number {
        return resultado.every(simbolo => simbolo === resultado[0]) ? apuesta * 15 : 0;
    }
  }