
export class Cliente {
    nombre: string;
    saldo: number;

    constructor(nombre: string, saldo: number) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    public descontarSaldo(apuesta: number): void {
        if (apuesta > this.saldo) {
            console.log(`Saldo insuficiente para realizar la apuesta de ${apuesta}.`);
        } else {
            this.saldo -= apuesta;
        }
    }

    public agregarSaldo(cantidad: number): void {
        this.saldo += cantidad;
    }
}
