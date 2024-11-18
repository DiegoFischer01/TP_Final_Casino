
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

    //Agregar saldo se usa solamente cuando gana. Es decir, Jugar va a llamar a este metodo, si se da que el cliente gana.
    public agregarSaldo(cantidad: number): void {
        this.saldo += cantidad;
    }
}
