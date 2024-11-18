import { Cliente } from "./cliente";
import { Tragamonedas} from "./tragamonedas";
import { TragamonedasEgipto } from "./tragamonedasEgipto";
import { Juego } from "./juego";



const clienteJuan = new Cliente("Juan Perez", 1000);

const tragamonedasEgipto = new TragamonedasEgipto("Tragamonedas Clásico", 3, 5, 100);
const juegoClasico = new Juego(tragamonedasEgipto);

juegoClasico.jugar(clienteJuan, 50); // Cliente Juan juega con 50 unidades de saldo
juegoClasico.jugar(clienteJuan,35);