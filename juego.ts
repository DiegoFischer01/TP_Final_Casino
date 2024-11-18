import { Tragamonedas } from "./tragamonedas";
import { TragamonedasEgipto } from "./tragamonedasEgipto";
import { Cliente } from "./cliente";


export class Juego {
    private tragamonedas: Tragamonedas;
  
    constructor(tragamonedas: Tragamonedas) {
        this.tragamonedas = tragamonedas;
    }
  
    public jugar(cliente: Cliente, apuesta: number): void {
        if (apuesta < this.tragamonedas.getApuestaMinima() || apuesta > this.tragamonedas.getApuestaMaxima()) {
            console.log(`La apuesta debe estar entre ${this.tragamonedas.getApuestaMinima()} y ${this.tragamonedas.getApuestaMaxima()}.`);
            return;
        }
  
        if (apuesta > cliente.saldo) {
            console.log(`Saldo insuficiente para realizar la apuesta.`);
            return;
        }
        
        //Si paso las validaciones de arriba, lo primero que hace es descontar la apuesta del saldo del cliente.
        cliente.descontarSaldo(apuesta);
        //Lamamos a los metodos de tragamonedas...
        const resultado = this.tragamonedas.girar();
        const premio = this.tragamonedas.obtenerPremio(resultado, apuesta);
        cliente.agregarSaldo(premio);
        
        //join: Muestra los resultados de un array de string de forma seguida y con el separador que le indico yo.
        //En este caso (', ') 
        console.log(`Resultado: ${resultado.join(', ')}`);
        if (premio > 0) {
            console.log(`¡Felicidades! Has ganado ${premio}.`);
        } else {
            console.log(`Has perdido la apuesta de ${apuesta}.`);
        }
        console.log(`Saldo actual: ${cliente.saldo}`);
    }
  }