import { Casino } from './casino';
import { TragamonedasEgipto } from './tragamonedasEgipto';
import { TragamonedasAnimal } from './tragamonedasAnimal';
import { Ruleta } from './ruleta';

// Crear instancia del casino
const casino = new Casino();

// Registrar juegos
const tragamonedasEgipto = new TragamonedasEgipto('Tragamonedas Egipto', 3, 5, 50);
const tragamonedasAnimal = new TragamonedasAnimal('Tragamonedas Animales', 3, 5, 50);
const ruleta = new Ruleta('Ruleta');

casino.registrarJuego(tragamonedasEgipto);
casino.registrarJuego(tragamonedasAnimal);
casino.registrarJuego(ruleta);

// Iniciar el casino
casino.iniciar();
