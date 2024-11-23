import { Cliente } from './cliente';
import { TragamonedasEgipto } from './tragamonedasEgipto';
import { TragamonedasAnimal } from './tragamonedasAnimal';

// Crear cliente
const clienteJuan = new Cliente("Juan", 100); // Cliente con saldo inicial de 100

// Crear tragamonedas temática egipcia
const tragamonedasEgipto = new TragamonedasEgipto("Egipto Mágico", 3, 5, 50);

// Crear tragamonedas temática de animales
const tragamonedasAnimal = new TragamonedasAnimal("Safari Salvaje", 3, 5, 50);

// Juan intenta jugar con diferentes tragamonedas y apuestas
tragamonedasEgipto.jugar(clienteJuan, 10);
tragamonedasEgipto.jugar(clienteJuan, 60); // Apuesta fuera del rango
tragamonedasEgipto.jugar(clienteJuan, 5);

console.log("Cambiando a tragamonedas de animales...");

tragamonedasAnimal.jugar(clienteJuan, 10);
tragamonedasAnimal.jugar(clienteJuan, 5);
