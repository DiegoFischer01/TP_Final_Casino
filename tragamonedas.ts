import { Cliente } from "./cliente";


export abstract class Tragamonedas {
  protected nombre: string;
  protected cantidadSimbolos: number;
  protected apuestaMinima: number;
  protected apuestaMaxima: number;

  constructor(nombre: string, cantidadSimbolos: number, apuestaMinima: number, apuestaMaxima: number) {
      this.nombre = nombre;
      this.cantidadSimbolos = cantidadSimbolos;
      this.apuestaMinima = apuestaMinima;
      this.apuestaMaxima = apuestaMaxima;
  }

  public girar(): string[] {
      const resultado = this.generarResultado();
      return resultado;
  }

  protected abstract generarResultado(): string[];

  public abstract obtenerPremio(resultado: string[], apuesta: number): number;


  public getApuestaMinima(): number {
      return this.apuestaMinima;
  }

  public getApuestaMaxima(): number {
      return this.apuestaMaxima;
  }
}