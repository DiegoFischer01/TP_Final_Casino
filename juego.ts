import { Cliente } from "./cliente";

export interface Juego {
    nombre: string;
    jugar(cliente: Cliente, apuesta: number): void;
}

