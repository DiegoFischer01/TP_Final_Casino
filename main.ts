import { Casino } from './casino';
import { TragamonedasEgipto } from './tragamonedasEgipto';
import { TragamonedasAnimal } from './tragamonedasAnimal';
import { Ruleta } from './ruleta';
import { Blackjack } from './blackJack';

// Crear instancia del casino
const casino = new Casino();

// Registrar juegos
const tragamonedasEgipto = new TragamonedasEgipto('Tragamonedas Egipto', 3, 5, 50);
const tragamonedasAnimal = new TragamonedasAnimal('Tragamonedas Animales', 4, 50, 100);
const ruleta = new Ruleta('Ruleta');
const blackjack = new Blackjack('Blackjack');

casino.registrarJuego(tragamonedasEgipto);
casino.registrarJuego(tragamonedasAnimal);
casino.registrarJuego(ruleta);
casino.registrarJuego(blackjack);

// Iniciar el casino
casino.iniciar();
