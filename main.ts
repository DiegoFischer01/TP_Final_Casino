import { Casino } from './casino';
import { TragamonedasEgipto } from './tragamonedasEgipto';
import { TragamonedasAnimal } from './tragamonedasAnimal';

// Crear instancia del casino
const casino = new Casino();

// Registrar juegos
const tragamonedasEgipto = new TragamonedasEgipto("Egipto Mágico", 3, 5, 50);
const tragamonedasAnimal = new TragamonedasAnimal("Safari Salvaje", 3, 5, 50);

casino.registrarJuego('Tragamonedas Egipto', tragamonedasEgipto);
casino.registrarJuego('Tragamonedas Animales', tragamonedasAnimal);

// Iniciar el casino
casino.iniciar();
