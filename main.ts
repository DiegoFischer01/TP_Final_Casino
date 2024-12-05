import { Casino } from './casino';
import { TragamonedasEgipto } from './tragamonedasEgipto';
import { TragamonedasAnimal } from './tragamonedasAnimal';

// Crear instancia del casino
const casino = new Casino();

// Registrar juegos
const tragamonedasEgipto = new TragamonedasEgipto('Tragamonedas Egipto', 3, 5, 50);
const tragamonedasAnimal = new TragamonedasAnimal('Tragamonedas Animales', 5, 10, 100);
casino.registrarJuego(tragamonedasEgipto);
casino.registrarJuego(tragamonedasAnimal);

// Iniciar el casino
casino.iniciar();
