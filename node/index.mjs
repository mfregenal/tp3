import {leerSuperheroes, agregarSuperheroes} from './utils.mjs';

const archivoOriginal = './superheroes.txt';
const archivoNuevo = './agregarSuperheroes.txt';
let superheroes

//Leer y mostrar la lista de superheroes ordenada
superheroes = leerSuperheroes(archivoOriginal);

console.log('Superheroes ordenados:');

console.log(superheroes);

//Agregar nuevos superhéroes
console.log('===========================================================================================');
console.log('Actualizando Superhéroes');
agregarSuperheroes(archivoOriginal, archivoNuevo);

//Leer y mostrar la lista actualizada de superhéroes ordenada
superheroes = leerSuperheroes(archivoOriginal);

console.log('Superhéroes ordenados: ');

console.log(superheroes);