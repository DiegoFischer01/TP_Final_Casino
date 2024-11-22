import { Cliente } from "./cliente";
import { Tragamonedas} from "./tragamonedas";
import { TragamonedasEgipto } from "./tragamonedasEgipto";
import { tragamonedasAnimal } from "./tragamonedasAnimal";
import { Juego } from "./juego";



const clienteJuan = new Cliente("Juan Perez", 1000);
const clienteBrai= new Cliente ("Braian",1500)
const tragamonedasEgipto = new TragamonedasEgipto("Tragamonedas Egipcio", 3, 5, 100);
const tragamonedasAnimales= new tragamonedasAnimal ("Tragamonedas Animal",3, 15,150 )

const juegoClasico = new Juego(tragamonedasEgipto);
const juegoAnimal =new Juego(tragamonedasAnimales)

juegoClasico.jugar(clienteJuan, 50); // Cliente Juan juega con 50 unidades de saldo
juegoClasico.jugar(clienteJuan,35);
juegoClasico.jugar(clienteJuan,40);
juegoClasico.jugar(clienteJuan,80);
juegoClasico.jugar(clienteJuan,35);
juegoClasico.jugar(clienteJuan,20);

juegoAnimal.jugar(clienteBrai,80) //Cliente Braian arranca a jugar con un saldo de 80
juegoAnimal.jugar(clienteBrai,90)
juegoAnimal.jugar(clienteBrai,100)