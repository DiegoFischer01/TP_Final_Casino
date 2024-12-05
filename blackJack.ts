import { Juego } from './Juego';
import { Cliente } from './cliente';

export class Blackjack implements Juego {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public jugar(cliente: Cliente, apuesta: number): void {
        // Lógica del juego de Blackjack
        const mazo = this.crearMazo();
        const manoJugador = [this.sacarCarta(mazo), this.sacarCarta(mazo)];
        const manoCrupier = [this.sacarCarta(mazo), this.sacarCarta(mazo)];

        console.log(`Tus cartas: ${manoJugador.join(', ')}`);
        console.log(`Carta del crupier: ${manoCrupier[0]}`);

        let valorJugador = this.calcularValorMano(manoJugador);
        let valorCrupier = this.calcularValorMano(manoCrupier);

        while (valorJugador < 21 && this.pedirOtraCarta()) {
            manoJugador.push(this.sacarCarta(mazo));
            valorJugador = this.calcularValorMano(manoJugador);
            console.log(`Tus cartas: ${manoJugador.join(', ')} (Total: ${valorJugador})`);
            console.log(`Saldo actual: $${cliente.saldo}`);
        }

        if (valorJugador > 21) {
            console.log('Te pasaste. Perdiste.');
            cliente.descontarSaldo(apuesta);
            console.log(`Saldo actual: $${cliente.saldo}`);
            return;
        }

        console.log(`Cartas del crupier: ${manoCrupier.join(', ')} (Total: ${valorCrupier})`);

        while (valorCrupier < 17) {
            manoCrupier.push(this.sacarCarta(mazo));
            valorCrupier = this.calcularValorMano(manoCrupier);
            console.log(`Cartas del crupier: ${manoCrupier.join(', ')} (Total: ${valorCrupier})`);
        }

        if (valorCrupier > 21 || valorJugador > valorCrupier) {
            console.log('¡Ganaste!');
            cliente.agregarSaldo(apuesta * 2);
        } else if (valorJugador < valorCrupier) {
            console.log('Perdiste.');
            cliente.descontarSaldo(apuesta);
        } else {
            console.log('Empate.');
        }

        console.log(`Saldo actual: $${cliente.saldo}`);
    }

    private crearMazo(): string[] {
        const palos = ['Corazones', 'Diamantes', 'Treboles', 'Picas'];
        const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const mazo: string[] = [];
        
        for (const palo of palos) {
            for (const valor of valores) {
                mazo.push(`${valor} de ${palo}`);
            }
        }
    
        // Barajar el mazo utilizando el algoritmo visto en clases anteriores.
        for (let i = mazo.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
        }
    
        return mazo;
    }
    

    private sacarCarta(mazo: string[]): string {
        return mazo.pop()!;
    }

    private calcularValorMano(mano: string[]): number {
        let valor = 0;
        let ases = 0;
        for (const carta of mano) {
            const valorCarta = carta.split(' ')[0];
            if (valorCarta === 'A') {
                ases++;
                valor += 11;
            } else if (['J', 'Q', 'K'].includes(valorCarta)) {
                valor += 10;
            } else {
                valor += parseInt(valorCarta);
            }
        }
        while (valor > 21 && ases > 0) {
            valor -= 10;
            ases--;
        }
        return valor;
    }

    private pedirOtraCarta(): boolean {
        const readlineSync = require('readline-sync');
        const respuesta = readlineSync.question("¿Quieres otra carta? (s/n): ");
        return respuesta.toLowerCase() === 's';
    }
}


