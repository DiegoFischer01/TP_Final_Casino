import { Cliente } from "./cliente";

export abstract class Juego {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public abstract jugar(cliente: Cliente, apuesta: number): void;
}

